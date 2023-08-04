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

// function findNode(head, target) {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) return true;

//     current = current.next;
//   }

//   return false;
// }

function findNode(head, target) {
  if (head === null) return false;
  if (target === head.val) return true;
  else return findNode(head.next, target);
}

//console.log(findNode(a, "S"));
