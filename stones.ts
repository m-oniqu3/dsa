// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function (jewels: string, stones: string) {
  const recordedStones = {};
  let recordedJewels = 0;

  for (let i = 0; i < stones.length; i++) {
    // If the stone is not already recorded, add to map with a value of 1
    if (!recordedStones[stones[i]]) {
      recordedStones[stones[i]] = 1;
    } else {
      // If the stone is already recorded, increment it
      recordedStones[stones[i]] += 1;
    }
  }

  for (let j = 0; j < jewels.length; j++) {
    //check if the current letter is record and add the value to recordedJewels
    if (recordedStones[jewels[j]]) {
      recordedJewels += recordedStones[jewels[j]];
    }
  }
  return recordedJewels;
};

var numJewelsInStones = function (jewels: string, stones: string) {
  const recordedStones = new Map<string, boolean>();
  let recordedJewels = 0;

  // record each letter
  for (let el of jewels) {
    recordedStones.set(el, true);
  }

  //loop throught stones & check if the letter was recorded
  //increment the counter
  for (let el of stones) {
    if (recordedStones.has(el)) {
      recordedJewels++;
    }
  }

  return recordedJewels;
};

numJewelsInStones("aA", "aAAbbbb");
numJewelsInStones("z", "ZZ");
