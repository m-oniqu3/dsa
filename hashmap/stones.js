// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
var numJewelsInStones = function (jewels, stones) {
    var recordedStones = {};
    var recordedJewels = 0;
    for (var i = 0; i < stones.length; i++) {
        // If the stone is not already recorded, add to map with a value of 1
        if (!recordedStones[stones[i]]) {
            recordedStones[stones[i]] = 1;
        }
        else {
            // If the stone is already recorded, increment it
            recordedStones[stones[i]] += 1;
        }
    }
    for (var j = 0; j < jewels.length; j++) {
        //check if the current letter is record and add the value to recordedJewels
        if (recordedStones[jewels[j]]) {
            recordedJewels += recordedStones[jewels[j]];
        }
    }
    return recordedJewels;
};
var numJewelsInStones = function (jewels, stones) {
    var recordedStones = new Map();
    var recordedJewels = 0;
    // record each letter
    for (var _i = 0, jewels_1 = jewels; _i < jewels_1.length; _i++) {
        var el = jewels_1[_i];
        recordedStones.set(el, true);
    }
    //loop throught stones & check if the letter was recorded
    //increment the counter
    for (var _a = 0, stones_1 = stones; _a < stones_1.length; _a++) {
        var el = stones_1[_a];
        if (recordedStones.has(el)) {
            recordedJewels++;
        }
    }
    return recordedJewels;
};
numJewelsInStones("aA", "aAAbbbb");
numJewelsInStones("z", "ZZ");
