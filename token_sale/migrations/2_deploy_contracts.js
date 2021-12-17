const DappToken = artifacts.require("DappToken");
const DappTokenSale = artifacts.require("DappTokenSale");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(() => {
    // Token price is 0.0-1 Ether
    let tokenPrice = 1000000000000000; 
    return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
  });
};
