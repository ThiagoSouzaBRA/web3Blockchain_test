// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract firstContract {
    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
