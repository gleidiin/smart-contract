const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

/**
 * Mainnet production network	  https://mainnet.infura.io/APkOCH9W0S80tA7inoTj
 * Ropsten test network	        https://ropsten.infura.io/APkOCH9W0S80tA7inoTj
 * INFURAnet test network	      https://infuranet.infura.io/APkOCH9W0S80tA7inoTj
 * Kovan test network	          https://kovan.infura.io/APkOCH9W0S80tA7inoTj
 * Rinkeby test network	        https://rinkeby.infura.io/APkOCH9W0S80tA7inoTj
 * IPFS	gateway	                https://ipfs.infura.io
 */

const provider = new HDWalletProvider(
  'YOUR PASS',
  'https://rinkeby.infura.io/INFURA-PASS'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Tentando fazer deploy com a conta: ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Deploy Completo, endereço do contrato: ', result.options.address);
};
deploy();
