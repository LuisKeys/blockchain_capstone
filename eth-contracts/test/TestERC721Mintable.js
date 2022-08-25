var OSREERC721Token = artifacts.require('OSREERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_1 = accounts[0];
    const account_2 = accounts[1];
    const account_3 = accounts[2];
    const account_4 = accounts[3];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await OSREERC721Token.new({from: account_1});

            // TODO: mint multiple tokens
            await this.contract.mint(account_2, 1, {from: account_1});
            await this.contract.mint(account_3, 2, {from: account_1});
            await this.contract.mint(account_4, 3, {from: account_1});
        })

        it('Should return total supply.', async function () { 
            let total = await this.contract.totalSupply.call();
            assert.equal(total.toNumber(), 3, "incorrect total supply");
        })

        it('Should get token balance.', async function () { 
            let balance_2 = await this.contract.balanceOf.call(account_2);
            let balance_3 = await this.contract.balanceOf.call(account_3);
            assert.equal(balance_2.toNumber(), 1, "Incorrect balance of account 2");
            assert.equal(balance_3.toNumber(), 1, "Incorrect balance of account 3");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('Should return token uri.', async function () { 
            let _tokenURI = await this.contract.tokenURI.call(2, {from: account_2});
            assert(_tokenURI == "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "TokenURI does not match");
        })

        it('Should transfer token from one owner to another.', async function () { 
            let tokenId = 1;
            
            // Approbe and transfer
            await this.contract.approve(account_3, tokenId, {from: account_2});
            await this.contract.transferFrom(account_2, account_3, tokenId, {from: account_2});
            
            // Check new owner
            newOwner = await this.contract.ownerOf.call(tokenId);
            assert.equal(newOwner, account_3, "Incorrect owner.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await OSREERC721Token.new({from: account_1});
        })

        it('Should fail when minting when address is not contract owner.', async function () { 
            let failed = false;
            try {
                await this.contract.mint(account_4,3,{from: account_2});
              } catch (e) {
                failed = true;
              }
    
              assert.equal(failed, true, "should fail when address is not account owner");
        })

        it('Should return contract owner.', async function () { 
            let owner = await this.contract.owner.call({from: account_1});
            assert.equal(owner, account_1, "Owner should be account_1");
        })

    });
})