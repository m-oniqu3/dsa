const StackWithLinkedList = require("../stack/stackWithLinkedList");

function Queue() {
  this.stack = new StackWithLinkedList();
}

Queue.prototype.peek = function () {
  return this.stack.bottom;
};

Queue.prototype.enqueue = function (value) {
  this.stack.push(value);
};

Queue.prototype.dequeue = function () {
  if (!this.stack.bottom) return null;
  if (this.stack.top === this.stack.bottom) {
    this.stack.bottom = null;
    this.stack.top = null;
  }
  const firstElement = this.stack.bottom;

  const secondElement = firstElement.next;
  firstElement.next = null;
  this.stack.bottom = secondElement;

  this.stack.length--;
  return this;
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
