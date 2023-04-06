//SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
pragma experimental ABIEncoderV2;

import "./Configuration.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LP_ICO is Ownable, ReentrancyGuard, Configurable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;
    address USDC;
    struct Pool {
        // pool name
        string name;
        // creator of the pool
        address poolCreator;
        // the timestamp in seconds the pool will open
        uint256 startAuctionAt;
        // the timestamp in seconds the pool will be closed
        uint256 endAuctionAt;
        // the delay timestamp in seconds when buyers can claim after pool filled
        uint256 claimAuctionFundsAt;
        // whether or not whitelist is enable
        bool enableWhiteList;
        uint256 maxAmountPerWallet;
        bool onlyZkstHolders;
        address sellToken;
        // Totol supply
        uint256 amountOfSellToken;
        //Swap ratio
        uint256 swapRatio;
        bool isUSDC;
    }

    Pool[] internal pools;

    mapping(uint256 => address) public poolOwners;

    mapping(address => uint256) public ethCollectedForPoolOwner;

    mapping(uint256 => mapping(address => uint256)) public ehterStakedByUsers;

    mapping(uint256 => uint256) public sellTokenCollected;

    mapping(uint256 => address[]) public whiteLists;

    uint256[] public poolBalances;

    event LiqiudityPoolCreated(
        uint256 indexed index,
        address indexed sender,
        Pool pool
    );
    event LiqiudityPoolEnded(
        uint256 indexed index,
        address indexed sender,
        Pool pool
    );
    event FundsAdded(uint256 indexed index, address indexed sender, Pool pool);
    event FundsRemoved(
        uint256 indexed index,
        address indexed sender,
        Pool pool
    );
    event FundsWithdrawn(
        uint256 indexed index,
        address indexed sender,
        uint256 indexed amount
    );
    event FeeCalculated(
        uint256 indexed index,
        address indexed sender,
        uint256 indexed amount
    );
    event TokensSwaped(
        uint256 indexed index,
        address indexed sender,
        uint256 indexed price
    );

    constructor(
        uint256 transactionFee,
        uint256 zkstTransactionFee,
        uint256 zkstTokenMinHolding,
        address zkstTokenAddress,
        address zkstHubWallet,
        address usdc
    )
        Configurable(
            transactionFee,
            zkstTransactionFee,
            zkstTokenMinHolding,
            zkstTokenAddress,
            zkstHubWallet
        )
    {
        USDC = usdc;
    }

    function calculateFee(
        uint256 funds,
        uint256 txFee,
        uint256 div
    ) public pure returns (uint256) {
        require((funds * txFee) / div > 0, "Too small");
        uint256 deductedFee = (funds * txFee) / div;
        return deductedFee;
    }

    function create(Pool memory pool, address[] memory whiteList)
        public
        nonReentrant
    {
        require(tx.origin == msg.sender, "disallow contract caller");
        require(pool.amountOfSellToken != 0, "invalid amountTotal0");
        require(pool.startAuctionAt > block.timestamp, "invalid openAt");
        require(pool.endAuctionAt > pool.startAuctionAt, "invalid closeAt");
        require(
            pool.claimAuctionFundsAt > pool.endAuctionAt,
            "invalid claim date"
        );
        require(pool.endAuctionAt > block.timestamp, "invalid close time");
        require(
            pool.claimAuctionFundsAt > block.timestamp,
            "invalid claim date"
        );

        uint256 index = pools.length;
        poolBalances.push(pool.amountOfSellToken);
        if (pool.enableWhiteList) {
            whiteLists[index] = whiteList;
        }

        pools.push(pool);
        poolOwners[index] = msg.sender;
        LiqiudityPoolCreated(index, msg.sender, pool);

        IERC20(pool.sellToken).transferFrom(
            msg.sender,
            address(this),
            pool.amountOfSellToken
        );

        uint256 decimals = ERC20(pool.sellToken).decimals();
        sellTokenCollected[index] = pool.amountOfSellToken * 10**decimals;
        FundsAdded(index, pool.poolCreator, pool);
    }

    function swapToken(uint256 index, uint256 amount)
        internal
        doesPoolExists(index)
    {
        Pool memory pool = pools[index];

        if (pool.onlyZkstHolders) {
            require(
                IERC20(_config.zkstTokenAddress).balanceOf(msg.sender) >
                    _config.zkstTokenMinHolding,
                "This pool is only avalible for zkst token holders"
            );
        }

        if (pool.enableWhiteList) {
            require(
                isAddressInWhiteList(msg.sender, index),
                "Address not in whitelist"
            );
        }

        uint256 balance = IERC20(pool.sellToken).balanceOf(address(this));
        // uint256 decimals = ERC20(pool.sellToken).decimals();

        require(balance > amount, "ERC20: transfer amount exceeds balance");
        ehterStakedByUsers[index][msg.sender] =
            ehterStakedByUsers[index][msg.sender] +
            amount;
        poolBalances[index] = poolBalances[index] - amount;
        sendFundsToPoolCreator(index);
    }

    function userWithDrawFunction(uint256 index)
        public
        isPoolReadyForClaim(index)
    {
        Pool memory pool = pools[index];

        require(
            ehterStakedByUsers[index][msg.sender] != 0,
            "Caller has no funds staked"
        );

        IERC20(pool.sellToken).approve(
            address(this),
            ehterStakedByUsers[index][msg.sender]
        ); // ehterStakedByUsers price against address
        IERC20(pool.sellToken).transfer(
            msg.sender,
            ehterStakedByUsers[index][msg.sender]
        );
        TokensSwaped(index, msg.sender, ehterStakedByUsers[index][msg.sender]);
        ehterStakedByUsers[index][msg.sender] = 0;
    }

    function sendFundsToPoolCreator(uint256 index) public {
        Pool memory pool = pools[index];
        uint256 funds = ethCollectedForPoolOwner[pool.poolCreator];
        // require funds greater than balance of tusdc
        require(
            funds - _config.zkstTransactionFee > 0,
            "Funds too small for transaction"
        );

        require(
            funds - _config.transactionFee > 0,
            "Funds too small for transaction"
        );

        uint256 fee;

        if (pool.onlyZkstHolders) {
            fee = calculateFee(funds, _config.zkstTransactionFee, 10000);

            funds = funds.sub(fee);
            if (pool.isUSDC) {
                IERC20(USDC).approve(address(this), fee);
                IERC20(USDC).transfer(_config.zkstHubWallet, fee);
            } else {
                payable(_config.zkstHubWallet).call{value: fee}("");
                //require(success, "Failed to transfer ETH to zkstHub wallet.");
            }
        } else {
            fee = calculateFee(funds, _config.transactionFee, 10000);

            funds = funds.sub(fee);
            if (pool.isUSDC) {
                IERC20(USDC).approve(address(this), fee);
                IERC20(USDC).transfer(_config.zkstHubWallet, fee);
            } else {
                payable(_config.zkstHubWallet).call{value: fee}("");
                //require(success, "Failed to transfer ETH to zkstHub wallet.");
            }
        }

        require(funds > 0, "Not enough funds to transfer");

        if (!pool.isUSDC) {
            payable(pool.poolCreator).transfer(funds);
        }

        if (pool.isUSDC) {
            require(
                funds <= IERC20(USDC).balanceOf(address(this)),
                "Not enough funds for usdc please contact support"
            );
            IERC20(USDC).approve(address(this), funds);
            IERC20(USDC).transfer(pool.poolCreator, funds);
        }

        ethCollectedForPoolOwner[pool.poolCreator] = 0;
        FundsWithdrawn(index, pool.poolCreator, funds);
        FeeCalculated(index, pool.poolCreator, fee);
    }

    function getPoolByIndex(uint256 index) public view returns (Pool memory) {
        return pools[index];
    }

    function getAllPools() public view returns (Pool[] memory) {
        return pools;
    }

    function isAddressInWhiteList(address sender, uint256 index)
        private
        view
        returns (bool)
    {
        address[] memory whitelist = whiteLists[index];

        require(whitelist.length > 0, "No whitelist in this pool");

        for (uint256 i = 0; i < whitelist.length; i++) {
            if (whitelist[i] == sender) return true;
        }

        return false;
    }

    function withdrawUnSoldTokens(uint256 index)
        public
        isPoolReadyForClaim(index)
    {
        require(msg.sender == pools[index].poolCreator, "Not creator of pool");
        require(poolBalances[index] > 0, "Pool balance is zero");
        IERC20(pools[index].sellToken).approve(
            address(this),
            poolBalances[index]
        ); // ehterStakedByUsers price against address

        IERC20(pools[index].sellToken).transfer(
            msg.sender,
            poolBalances[index]
        );

        poolBalances[index] = 0;
    }

    modifier doesPoolExists(uint256 index) {
        require(index < pools.length, "this pool does not exist");
        _;
    }

    modifier isPoolClosed(uint256 index) {
        require(
            pools[index].endAuctionAt > block.timestamp,
            "this pool is closed"
        );
        _;
    }

    modifier isPoolOpen(uint256 index) {
        require(
            pools[index].endAuctionAt < block.timestamp,
            "this pool is still open"
        );
        _;
    }

    modifier isPoolReadyForClaim(uint256 index) {
        require(
            pools[index].claimAuctionFundsAt < block.timestamp,
            "this pool is not ready to be claimed"
        );
        _;
    }
}