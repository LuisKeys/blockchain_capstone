require('dotenv').config();
var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;

module.exports = {
  networks: {
    develop: {
        port: 9545,
        network_id: 20,
        accounts: 10,
        defaultEtherBalance: 100,
        blockTime: 1
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${INFURA_KEY}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.5.8"
    }
  }
};

