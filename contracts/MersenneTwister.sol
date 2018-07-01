pragma solidity ^0.4.23;

// Solidity implementation of the Mersenne Twister, the most commonly pseudo-random number generator

contract MersenneTwiser {

  // Set constant coefficients for MT19937-32 as defined here:
  // https://en.wikipedia.org/wiki/Mersenne_Twister
  uint constant w = 32;
  uint constant n = 624;
  uint constant m = 397;
  uint constant r = 31;
  uint constant a = 0x9908B0DF;
  uint constant u = 11;
  uint constant d = 0xFFFFFFFF;
  uint constant s = 7;
  uint constant b = 0x9D2C5680;
  uint constant t = 15;
  uint constant c = 0xEFC60000;
  uint constant l = 18;

  // Variables to store the state of the generator
  uint[n] MT;
  uint index = n+1;
  uint constant lower_mask = (1 << r) - 1;
  uint constant upper_mask = (~lower_mask) & ((1 << w) - 1);

  // @dev: Initializes the generator with a particular seed_mt
  //
  // @param: seed, initial value to start generator with
  function seed_mt(uint seed) public {

  }

  // @dev: Extract tempered valued based on MT[index]
  function extract_number() public returns (uint) {

    return 0;
  }

  // @dev: Generate the next n values from the series x_i
  function twist() internal {

  }




}
