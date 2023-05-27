// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//creating a function called Transaction with the word contract
contract Transaction {
    uint256 transactionCount;

    //creating an event called transfer
    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp
    );

    //structure your varables with the keyword struct and naming your struct function "TransferStruct"
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint amount,
        string memory message
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp
            )
        );

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    //returning transactions
    function getBlockchain() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    //returning transactionCount
    function getBlockchainCount() public view returns (uint256) {
        return transactionCount;
    }
}
