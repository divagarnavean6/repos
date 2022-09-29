var SafeMath = artifacts.require("./SafeMath.sol");
var MedicalDaoCrowdsale =  artifacts.require("./MedicalDaoCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, MedicalDaoCrowdsale);
  deployer.deploy(MedicalDaoCrowdsale,
    "0x61A44075419C4402f6DE631341d875Ece6A3922e", // TODO : Update this address
    "0x61A44075419C4402f6DE631341d875Ece6A3922e" // TODO : Update this address
    );
};
