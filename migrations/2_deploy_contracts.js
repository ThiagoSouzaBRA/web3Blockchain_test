const firstContract = artifacts.require("firstContract");

module.exports = function(deployer) {
    deployer.deploy(firstContract, "Testing contract on the blockchain!");
};
