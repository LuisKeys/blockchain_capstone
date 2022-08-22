Versions:

* Truffle v5.4.29 (core: 5.4.29)
* Solidity v0.5.16 (solc-js)
* Node v14.18.1
* Web3.js v1.5.3

Install Zokrates docker:

* sudo usermod -a -G docker [your_user]
* newgrp docker
* docker run -v ~/projects/udacity/blockchain/blockchain-capstone:/home/zokrates/code -ti zokrates/zokrates /bin/bash

In the docker instance terminal execute the following:

* cd ~/code/zokrates/code/square
* zokrates compile -i square.code
* zokrates setup
* zokrates compute-witness -a 3 9


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
