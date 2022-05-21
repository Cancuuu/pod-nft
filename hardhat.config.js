/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    // ropsten: {
    //   url: API_URL,
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
