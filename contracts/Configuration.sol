//SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Configurable is Ownable {
    struct Config {
        uint256 transactionFee;
        uint256 zksTransactionFee;
        uint256 zksTokenMinHolding;
        address zksTokenAddress;
        address zksHubWallet;
        address[] whitelist;
    }

    Config public _config;

    constructor(
        uint256 transactionFee,
        uint256 zksTransactionFee,
        uint256 zksTokenMinHolding,
        address zksTokenAddress,
        address zksHubWallet
    ) {
        _config.transactionFee = transactionFee;
        _config.zksTokenMinHolding = zksTokenMinHolding;
        _config.zksTransactionFee = zksTransactionFee;
        _config.zksTokenAddress = zksTokenAddress;
        _config.zksHubWallet = zksHubWallet;
    }

    function updateWhiteList(address[] memory whitelist) public onlyOwner {
        _config.whitelist = whitelist;
    }

    function updateTransactionFee(uint256 txFee) public onlyOwner {
        _config.transactionFee = txFee;
    }

    function updateZksTransactionFee(uint256 txFee) public onlyOwner {
        _config.zksTransactionFee = txFee;
    }

    function updateZksTokenMinHolding(uint256 zksHolding) public onlyOwner {
        _config.zksTokenMinHolding = zksHolding;
    }    

    function updateZksAddress(address Zks) public onlyOwner {
        _config.zksTokenAddress = Zks;
    }

        function updateZksHubWalletAddress(address ZksHubWallet) public onlyOwner {
        _config.zksHubWallet = ZksHubWallet;
    }

    function getTransactionFee() public view returns (uint256) {
        return _config.transactionFee;
    }

    function getZksAddress() public view returns (address) {
        return _config.zksTokenAddress;
    }
}