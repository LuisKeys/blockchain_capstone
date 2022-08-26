require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require("web3");

const zproofs = [
  require("./p_0.json"),
  require("./p_1.json"),
  require("./p_2.json"),
  require("./p_3.json"),
  require("./p_4.json"),
  require("./p_5.json"),
  require("./p_6.json"),
  require("./p_7.json"),
  require("./p_8.json"),
  require("./p_9.json"),
];

const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const MNEMONIC = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;

console.log("OWNER_ADDRESS:" + OWNER_ADDRESS);
console.log("CONTRACT_ADDRESS:" + CONTRACT_ADDRESS);
console.log("MNEMONIC:" + MNEMONIC);
console.log("INFURA_KEY:" + INFURA_KEY);

/*
const contract = require("../eth-contracts/build/contracts/SolnSquareVerifier.json");
const ABI = contract.abi;
*/

async function main() {
  /*
  const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_KEY}`);
  const web3Instance = new web3(provider);

  const OSREERC721Token = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, {
    gasLimit: "1000000",
  });
    
  for (let i = 0; i < 10; i++) {
    try {
      let proofs = Object.values(zproofs[i].proof);
      let inputs = zproofs[i].inputs;
      let tx = await OSREERC721Token.methods.addSolution(OWNER_ADDRESS, i, ...proofs, inputs).send({ from: OWNER_ADDRESS });
      console.log("Solution added. Transaction: " + tx.transactionHash);
      tx = await OSREERC721Token.methods
        .mint(OWNER_ADDRESS, i)
        .send({ from: OWNER_ADDRESS });
      console.log("Minted item. Transaction: " + tx.transactionHash);
    } catch (e) {
      console.log(e);
    }
  }
  */
}

main();
