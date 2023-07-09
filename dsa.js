class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

// const array = new MyArray();
// array.push("hi");
// array.push("you");
// array.push("!");
// array.pop();

// console.log(array);

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not valid";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

// console.log(reverse("Hi My name is Andrei"));
// console.log(reverse2("Hi My name is Andrei"));

const mergeSortBad = (arr1, arr2) => {
  if (!arr1 && !arr2) {
    return "not valid params";
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const merge = [...arr1, ...arr2];

  for (let i = 0; i < merge.length; i++) {
    if (merge[i] > merge[i + 1]) {
      const temp = merge[i];
      merge[i] = merge[i + 1];
      merge[i + 1] = temp;
    }
  }

  return merge;
};

const mergeSortGood = (arr1, arr2) => {
  if (!arr1 && !arr2) {
    return "not valid params";
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const merged = [];
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2

  // if items are in both arrays then loop
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1 or arr2, add them to the merged array
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
};

console.log(mergeSortBad([0, 3, 4, 31], [4, 6, 30]));
