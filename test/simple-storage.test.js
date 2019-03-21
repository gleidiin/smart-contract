const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let contrato;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  contrato = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode
    })
    .send({ 
      from: accounts[0],
      gas: '3000000',
      gasPrice: web3.utils.toWei('2', 'gwei')
    });
  
});

describe('Simple Storage', () => {
  it('deploy o contrato', () => {
    assert.ok(contrato.options.address);
  });

  it('muda o valor do contrato e verifica a alteração', async () => {
    const data = 1;
    await contrato.methods
      .set(data)
      .send({ 
        from: accounts[0],
        gas: '1000000'
      });

    const storedData = await contrato.methods
      .get()
      .call();
  
    assert.equal(storedData, data);
  });

});
