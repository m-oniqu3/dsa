class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const linkedListValues = (head) => {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

const linkedListValuesRecursive = (head) => {
  const values = [];
  fillValues(head, values);

  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;

  values.push(head.val);
  fillValues(head.next, values);
};

// console.log(linkedListValues(a));
// console.log(linkedListValuesRecursive(a));
