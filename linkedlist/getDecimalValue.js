class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(0);
const c = new Node(1);
// const d = new Node("D");

a.next = b;
b.next = c;
// c.next = d;

var getDecimalValue = function (head) {
  let current = head;
  let values = [];
  let counter = 0;
  let decimal = 0;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  for (let i = values.length - 1; i >= 0; i--) {
    decimal += Math.pow(2, counter) * values[i];
    counter++;
  }

  return decimal;
};

console.log(getDecimalValue(a));
