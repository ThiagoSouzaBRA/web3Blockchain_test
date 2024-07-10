const firstContract = artifacts.require("firstContract");

module.exports = async function(callback) {
  try {
    let instance = await firstContract.deployed();

    let message = await instance.message();
    console.log("Message:", message); 
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
