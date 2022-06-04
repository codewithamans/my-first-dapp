// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Funder{
    uint public numoffunders;
    mapping(uint=> address) private funders;
    
    receive() external payable{}

    function transfer() external payable{
        funders[numoffunders]=msg.sender;
    }
    function withdraw(uint withdrawamount) external {
        require(withdrawamount<=5000000000000000000,"Cannot transfer more than 5 ethers");

         payable(msg.sender).transfer(withdrawamount);
        
    }
}