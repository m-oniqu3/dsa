//checks the set before adding, if the element exists already return true else return false
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (!set.has(num)) set.add(num);
    else return true;
  }

  return false;
};

// leetcode solution

//sets remove duplicate so just compare the length of both 'arrays'
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};
