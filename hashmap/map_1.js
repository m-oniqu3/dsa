const getFirstDupe = (arr) => {
  const map = new Map();
  let dupe;

  if (arr.length === 1) {
    return undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
    } else {
      dupe = arr[i];
      break;
    }
  }

  return dupe;
};

const getFirstDupe2 = (arr) => {
  const map = new Map();
  let dupe;

  if (arr.length === 1) {
    return undefined;
  }

  for (el of arr) {
    if (!map.has(el)) {
      map.set(el, true);
    } else {
      dupe = el;
      break;
    }
  }

  return dupe;
};

const getFirstDupeSet = (arr) => {
  const record = new Set();

  for (el of arr) {
    if (!record.has(el)) record.add(el);
    else return el;
  }

  return undefined;
};

console.log(getFirstDupeSet([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstDupeSet([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstDupeSet([2, 3, 4, 5]));
console.log(getFirstDupeSet([4]));
