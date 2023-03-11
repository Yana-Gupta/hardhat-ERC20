const { network, ethers } = require("hardhat");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const INITIAL_SUPPLY = 50;
  const ourToken = await deploy("OurToken", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`OurToken is deployed 🤝 at address ${ourToken.address}`);
};

module.exports.tags = ["all", "token"];
