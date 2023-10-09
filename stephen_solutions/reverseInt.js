/**
 *
 * @param {*} n
 * @returns number
 * Math.abs() returns the absolute value of a number (the value without regard to whether it is positive or negative)
 * we check if the number is negative, if it is we add a negative sign to the number
 */

function reverseInteger(n) {
  const num = Math.abs(n).toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt("-" + num);
  } else {
    return parseInt(num);
  }
}

reverseInteger(-15);

/**
 *
 * @param {*} int
 * @returns number
 * parseInt() turns the string into a number and removes any string characters after the number
 */
function reverseInt(int) {
  let res;

  if (int >= 0) {
    res = String(int).split("").reverse().join("");
  } else {
    res = "-" + parseInt(String(int).split("").reverse().join(""));
  }

  return Number(res);
}

/**
 *
 * @param {*} int
 * @returns number
 * Math.sign() returns 1 if the number is positive, -1 if the number is negative
 * Math.sign() ensures we keep the negative sign if the number is negative
 * parseInt() turns the string into a number and removes any string characters after the number
 */
function reversedInt(int) {
  const reversed = String(int).split("").reverse().join("");

  return parseInt(reversed) * Math.sign(int);
}
