# Blockchain Capstone Project
## Steps:

Install node modules:
* npm install
* npm install @truffle/hdwallet-provider --save

Versions of frameworks and libraries:

* Truffle v5.4.29 (core: 5.4.29)
* Solidity v0.5.16 (solc-js)
* Node v14.18.1
* Web3.js v1.5.3

Zokrates docker installation:

* sudo usermod -a -G docker [your_user]
* newgrp docker
* docker run -v ~/projects/udacity/blockchain/blockchain-capstone:/home/zokrates/code -ti zokrates/zokrates /bin/bash

In the docker instance terminal execute the following:

* cd ~/code/zokrates/code/square
* zokrates compile -i square.code
* zokrates setup
* zokrates compute-witness -a 3 9
* zokrates generate-proof
* zokrates export-verifier

Test contracts in Truffle devlopment local environment:
* truffle develop
In the truffle console run the following commands:
* compile
* migrate --reset
* test

Tests results:
![Tests results](images/tests.png)

Deploy contracts in Rinkeby testnet
* Config truffle-config.js with your metmask rinkeby mnemonic and infura endpoint
* Execute `truffle migrate --network rinkeby --reset`

Contracts Addresses:
OSREERC721Token:    0xEeC4BDA1D7a85582BaD7867F30aeAA80E4A3a1B8
SquareVerifier:     0x2252fD47bdF13eeB33b59abc3285944f60C4506E
SolnSquareVerifier: 0xA96D95F920c20445699b678F6778c5D3f74F0e20

# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
