//SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Configurable is Ownable {
    struct Config {
        uint256 transactionFee;
        uint256 zkstTransactionFee;
        uint256 zkstTokenMinHolding;
        address zkstTokenAddress;
        address zkstHubWallet;
        address[] whitelist;
    }

    Config public _config;

    constructor(
        uint256 transactionFee,
        uint256 zkstTransactionFee,
        uint256 zkstTokenMinHolding,
        address zkstTokenAddress,
        address zkstHubWallet
    ) {
        _config.transactionFee = transactionFee;
        _config.zkstTokenMinHolding = zkstTokenMinHolding;
        _config.zkstTransactionFee = zkstTransactionFee;
        _config.zkstTokenAddress = zkstTokenAddress;
        _config.zkstHubWallet = zkstHubWallet;
    }

    function updateWhiteList(address[] memory whitelist) public onlyOwner {
        _config.whitelist = whitelist;
    }

    function updateTransactionFee(uint256 txFee) public onlyOwner {
        _config.transactionFee = txFee;
    }

    function updateZkstTransactionFee(uint256 txFee) public onlyOwner {
        _config.zkstTransactionFee = txFee;
    }

    function updateZkstTokenMinHolding(uint256 zkstHolding) public onlyOwner {
        _config.zkstTokenMinHolding = zkstHolding;
    }    

    function updateZksAddress(address Zkst) public onlyOwner {
        _config.zkstTokenAddress = Zkst;
    }

        function updateZkstHubWalletAddress(address ZkstHubWallet) public onlyOwner {
        _config.zkstHubWallet = ZkstHubWallet;
    }

    function getTransactionFee() public view returns (uint256) {
        return _config.transactionFee;
    }

    function getZksAddress() public view returns (address) {
        return _config.zkstTokenAddress;
    }
}