const mersenneTwisterLib = require('mersenne-twister');

const MersenneTwister = artifacts.require('MersenneTwister');

contract("MersenneTwister", function(accounts) {
  var mersenneTwister;
  var generator;

  var addressA = web3.eth.accounts[0];

  it("should initialize the MersenneTwister contract and library with a common seed", async() => {
      mersenneTwister = await MersenneTwister.new();
      assert(mersenneTwister !== undefined, "has no MersenneTwister instance");

      let seed_mtHash = await mersenneTwister.seed_mt(1, {from: addressA, gas: 6700000});
      let blockHeader = await web3.eth.getBlock("latest");
      console.log("\t\t gas used to initialize a seed: " + blockHeader.gasUsed);

      generator = new mersenneTwisterLib(1);
  });

  it("should return the same random number as the Mersenne Twister library", async() => {
      let actualRandomNumber = generator.random_int();

      let extract_numberHash = mersenneTwister.extract_number({from: addressA});
      let extract_numberRes = mersenneTwister.extract_number.call({from: addressA});

      assert(extract_numberRes === actualRandomNumber, "Mersenne Twister smart contract returns a different random number than the mersenne twister library");
  });
})
