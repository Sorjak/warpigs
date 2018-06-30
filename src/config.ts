/* tslint:disable */

export default class WarpigsConfig {

    // static CONTRACT_ADDRESS = '0x658d4b455ee5dde2590460f046020abfd928b51e';
    // static ABI_INTERFACE = [
    // {
    //     "constant": false,
    //     "inputs": [
    //         {
    //             "name": "numberSelected",
    //             "type": "uint256"
    //         }
    //     ],
    //     "name": "bet",
    //     "outputs": [],
    //     "payable": true,
    //     "stateMutability": "payable",
    //     "type": "function"
    // },
    // {
    //     "constant": false,
    //     "inputs": [
    //         {
    //             "name": "numberWinner",
    //             "type": "uint256"
    //         }
    //     ],
    //     "name": "distributePrizes",
    //     "outputs": [],
    //     "payable": false,
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "constant": false,
    //     "inputs": [],
    //     "name": "generateNumberWinner",
    //     "outputs": [],
    //     "payable": false,
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "constant": false,
    //     "inputs": [],
    //     "name": "kill",
    //     "outputs": [],
    //     "payable": false,
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "constant": false,
    //     "inputs": [],
    //     "name": "resetData",
    //     "outputs": [],
    //     "payable": false,
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "payable": true,
    //     "stateMutability": "payable",
    //     "type": "fallback"
    // },
    // {
    //     "inputs": [
    //         {
    //             "name": "_minimumBet",
    //             "type": "uint256"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "nonpayable",
    //     "type": "constructor"
    // },
    // {
    //     "constant": true,
    //     "inputs": [],
    //     "name": "maxAmountOfBets",
    //     "outputs": [
    //         {
    //             "name": "",
    //             "type": "uint256"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "constant": true,
    //     "inputs": [],
    //     "name": "minimumBet",
    //     "outputs": [
    //         {
    //             "name": "",
    //             "type": "uint256"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "constant": true,
    //     "inputs": [],
    //     "name": "numberOfBets",
    //     "outputs": [
    //         {
    //             "name": "",
    //             "type": "uint256"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "constant": true,
    //     "inputs": [],
    //     "name": "owner",
    //     "outputs": [
    //         {
    //             "name": "",
    //             "type": "address"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "constant": true,
    //     "inputs": [
    //         {
    //             "name": "",
    //             "type": "address"
    //         }
    //     ],
    //     "name": "playerInfo",
    //     "outputs": [
    //         {
    //             "name": "amountBet",
    //             "type": "uint256"
    //         },
    //         {
    //             "name": "numberSelected",
    //             "type": "uint256"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "constant": true,
    //     "inputs": [
    //         {
    //             "name": "",
    //             "type": "uint256"
    //         }
    //     ],
    //     "name": "players",
    //     "outputs": [
    //         {
    //             "name": "",
    //             "type": "address"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "constant": true,
    //     "inputs": [],
    //     "name": "totalBet",
    //     "outputs": [
    //         {
    //             "name": "",
    //             "type": "uint256"
    //         }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // }
    // ];
    static CONTRACT_ADDRESS = '0x2a9ea61df82fabaf2bd1b59b6486493ed5736299';
    static ABI_INTERFACE = [
        {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "resetData",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "sendEthToContract",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "pigInfo",
            "outputs": [
                {
                    "name": "amountPaid",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pigs_list",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

}