const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const contract = require('./build/SimpleStorage.json');



const provider = new HDWalletProvider(
  'YOUR PASS',
  'https://rinkeby.infura.io/INFURA-PASS'
);
const web3 = new Web3(provider);


const instance = new web3.eth.Contract(
  JSON.parse(contract.interface),
  '0xF582862D80b277Ece8a12D1ea207CCD7328716CD'
);

module.exports = instance;
