const SimpleSmartContract = artifacts.require('SimpleSmartContract')

contract('SimpleStorageContract', () => {
    it('Should deploy smart contract properly', async () => {
        const simpleSmartContract = await SimpleSmartContract.deployed();
        console.log(simpleSmartContract.adress);
        assert(simpleSmartContract !== '');

    });

});