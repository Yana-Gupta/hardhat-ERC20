// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Imported openzeppelin to use their token

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("OurToken", "OTC") {
        _mint(msg.sender, initialSupply);
    }
}
