pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier {

}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is OSREERC721Token, SquareVerifier {
    // TODO define a solutions struct that can hold an index & an address
    struct Solutions {
        uint256 tokenId;
        address to;
    }

    // TODO define an array of the above struct
    Solutions[] solList;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solutions) private uniqueSol;

    // TODO Create an event to emit when a solution is added
    event AddedSol(uint256 tokenId, address to);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
        address to,
        uint256 tokenId,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(uniqueSol[key].to == address(0), "Used solution.");

        Pairing.G1Point memory ap = Pairing.G1Point({X: a[0], Y: a[1]});
        Pairing.G2Point memory bp = Pairing.G2Point({X: b[0], Y: b[1]});
        Pairing.G1Point memory cp = Pairing.G1Point({X: c[0], Y: c[1]});
        Proof memory proof = Proof({a: ap, b: bp, c: cp});
        require(verifyTx(proof, input), "Invalid solution.");

        Solutions memory solutions = Solutions({tokenId: tokenId, to: to});
        solList.push(solutions);
        uniqueSol[key] = solutions;
        emit AddedSol(tokenId, to);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintToken(
        address to,
        uint256 tokenId,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public {
        addSolution(to, tokenId, a, b, c, input);
        super.mint(to, tokenId);
    }
}
