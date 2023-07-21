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

// a common mistake thats made when traversing the list is that we check current.next !== null , this will cause us to miss the last node in the list and cut the loop short, it is better to check if current !== null because if current is null then current.next will throw an error and the loop will stop . this way we exit the loop when current is null and we dont have to check if current.next is null

const printLinkedList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
// printLinkedList(a);

const printLinkedListRecursive = (head) => {
  // start with base case - when are you done with the algorithm
  // you are finished when head === null
  // the base case is an analogy for the condition written in the while loop

  if (head === null) return;

  console.log(head.val);
  printLinkedListRecursive(head.next);
};

// printLinkedListRecursive(a);

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

console.log(linkedListValues(a));
console.log(linkedListValuesRecursive(a));
