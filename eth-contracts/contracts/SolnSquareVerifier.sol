pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier{

}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is  OSREERC721Token, SquareVerifier {


// TODO define a solutions struct that can hold an index & an address
struct Solutions{
    uint tokenId;
    address to;
}

// TODO define an array of the above struct
Solutions[] solList;

// TODO define a mapping to store unique solutions submitted
mapping (bytes32 => Solutions) private uniqueSol;


// TODO Create an event to emit when a solution is added
event AddedSol(uint tokenId,address to);

// TODO Create a function to add the solutions to the array and emit the event
function addSol(address to,uint tokenId, bytes32 key) public {
    Solutions memory solutions = Solutions({tokenId:tokenId, to:to});
    solList.push(solutions);
    uniqueSol[key] = solutions;
    emit AddedSol(tokenId, to);
}

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
function mintToken(address to, uint tokenId, Proof memory proof, uint[2] memory input) public {
    bytes32 key = keccak256(abi.encodePacked(input));
    require(uniqueSol[key].to == address(0),"used solution.");
    require(verifyTx(proof, input),"invalid solution");
    
    addSol(to, tokenId, key);
    super.mint(to, tokenId);
}

  
}
