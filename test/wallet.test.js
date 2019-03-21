const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


let account;

describe('Carteira', () => { 
    it('Cria uma nova carteira', async () => {
        account = web3.eth.accounts.create();
        assert.ok(account);
    });

    it('Chave privada correta', async() => {
        let retrivedAccount = web3.eth.accounts.privateKeyToAccount(account.privateKey);
        assert.equal(account.address, retrivedAccount.address);
    });
});