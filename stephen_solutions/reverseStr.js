function reverse(str) {
  return str.split("").reverse().join("");
}

// for loop
function reverse(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

reverse("apple");

// for of loop
function reverseStr(str) {
  let result = "";

  // add to beginning of the string
  for (const letter of str) {
    result = letter + result;
  }
  return result;
}

reverseStr("apple");

// reduce
function reverseInput(str) {
  let result = str.split("").reduce((acc, curr) => {
    acc = curr + acc;
    return acc;
  }, "");

  return result;
}

reverseInput("apple");
