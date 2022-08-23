const verifier = artifacts.require('SolnSquareVerifier');
let proof = require("../../zokrates/code/square/proof");

contract('TestSolnSquareVerifier', accounts => {
  describe('SolnSquareVerifier', function(){
      beforeEach(async function() {
          this.contract = await verifier.new();
      });

      // Test if a new solution can be added for contract - SolnSquareVerifier
      it('Add new solutions', async function(){
          let tx = await this.contract.addSolution(accounts[1], 1, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
          let added_sol_event = tx.logs[0].event;
          assert.equal(added_sol_event, 'AddedSol', 'Invalid event emitted, AddedSol expected'); 
      });

      // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
      it('Mint token', async function(){
          await this.contract.addSolution(accounts[1], 1, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs, {from: accounts[0]});
          let tx = await this.contract.mint(accounts[1], 1, {from: accounts[0]});
          let transferredOwnership = tx.logs[0].event;
          assert.equal(transferredOwnership, 'Transfer', 'Invalid event emitted');
      });
  });
})