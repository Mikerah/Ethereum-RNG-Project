const mersenneTwisterLib = require("mersenne-twister");

var MersenneTwister = artifacts.require("MersenneTwiser");

contract("MersenneTwister", function(accounts) {
  var mersenneTwister;
  var generator;

  var accountA = web3.eth.accounts[0];

  it("should initialize the MersenneTwister contract and library with a common seed", async() => {
      mersenneTwister = await MersenneTwister.deployed();
      assert(mersenneTwister !== undefined, "has no MersenneTwister instance");

      let seed_mtHash = await mersenneTwister.seed_mt(123, {from: addressA});
      generator = new mersenneTwisterLib(123);
  });

  it("should return the same random number as the Mersenne Twister library", async() => {
      let actualRandomNumber = generator.random_int();

      let extract_numberHash = mersenneTwister.extract_number({from: addressA});
      let extract_numberRes = mersenneTwister.extract_number.call({from: addressA});

      assert(extract_numberRes.toNumber() === actualRandomNumber.toNumber(), "Mersenne Twister smart contract returns a different random number than the mersenne twister library");
  });
})
