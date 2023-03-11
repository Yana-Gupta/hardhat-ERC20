// import("hardhat/config").HardhatUserConfig;
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");
require("dotenv").config();
module.exports = {
  solidity: "0.8.18",
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConformations: 1,
      forking: {
        url: process.env.MAINNET_RPC_URL
      }
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY1],
      chainId: 5,
      allowUnlimitedContractSize: true,
      blockConformations: 5,
      gas: 5000000,
      gasPrice: 50000000000,
      allowUnlimitedContractSize: true,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  mocha: {
    timeout: 300000,
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },
};
