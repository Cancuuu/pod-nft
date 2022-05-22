require("dotenv").config();

const { PRIVATE_KEY } = process.env;

const WEB3 = require("web3");

const web3 = new WEB3("https://alfajores-forno.celo-testnet.org");

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/nftcelo.sol/ProofOfDonation.json");

const contractAddress = "0x0a284F6035C60Ad35256e32E37349E6714c98d25";

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(poolAddress) {
  const tx = {
    to: contractAddress,
    gas: 500000,
    data: nftContract.methods.safeMint(poolAddress).encodeABI(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const sendedTx = await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );

  console.log(sendedTx);
}

// mintNFT("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");

async function addPool(address, ipfsString) {
  const tx = {
    to: contractAddress,
    gas: 500000,
    data: nftContract.methods.addPool(address, ipfsString).encodeABI(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const sendedTx = await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );

  console.log(sendedTx);
}

// addPool("0x00000000219ab540356cbb839cbe05303d7705fa", "");
