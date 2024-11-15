require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    },
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/CvV5idzb0cuO-s9iOy5qwTpctVtF9c0S",
      accounts: ["2635bdbfae0fb6ce789d08305813669d00e5ab57b6b8cc0f60871410529c5270"]
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};