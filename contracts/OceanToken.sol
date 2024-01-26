// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OceanToken is ERC20 {
    constructor() ERC20("Ocean Token", "OCT") {
        _mint(msg.sender, 100_000_000 * (10 ** decimals()));
    }
}