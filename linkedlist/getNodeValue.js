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

// function getNodeValue(head, index) {
//   let current = head;
//   let counter = 0;
//   while (current !== null) {
//     if (counter === index) return current.val;

//     current = current.next;
//     counter++;
//   }

//   return null;
// }

function getNodeValue(head, index) {
  if (head === null) return null;

  if (index === 0) return head.val;
  index--;
  return getNodeValue(head.next, index);
}

console.log(getNodeValue(a, 1));
