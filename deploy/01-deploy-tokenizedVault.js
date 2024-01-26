const { ethers, deployments, getNameAccounts, network } = require("hardhat");
const { verify } = require("../utils/verify");

const deployTokenizedVault = async ({ getNameAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = getNameAccounts();

    const args = []

    const tokenizedVault = await deploy("TokenizedVault", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations
    });
    log("................................")
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(tokenizedVault.address, args)
    }
}

module.exports.default = deployTokenizedVault