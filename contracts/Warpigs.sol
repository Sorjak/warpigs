pragma solidity 0.4.24;

contract Warpigs {
    address public owner;
    address[] public pigs_list;

    struct Pig {
        uint256 amountPaid;
    }
    // The address of the Pig and => the pig info   
    mapping(address => Pig) public pigInfo;

    constructor() public {
        owner = msg.sender;
    }

    function kill() public {
        if (msg.sender == owner) selfdestruct(owner);
    }

    function checkPigExists(address pig) private constant returns(bool){
        for(uint256 i = 0; i < pigs_list.length; i++){
            if (pigs_list[i] == pig) return true;
        }

        return false;
    }

    function getAllPigs() public returns(address[]) {
        return pigs_list;
    }

    function sendEthToContract() public payable{
        pigInfo[msg.sender].amountPaid = msg.value;

        if (!checkPigExists(msg.sender)) {
            pigs_list.push(msg.sender);
        }
    }
    
    function resetData() public {
        pigs_list.length = 0; // Delete all the players array
    }

    // Fallback function in case someone sends ether to the contract so it doesn't get lost and to increase the treasury of this contract that will be distributed in each game
    function() public payable {}
}