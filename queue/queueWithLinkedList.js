class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    if (!value) return "Submit a value to add to queue";
    const node = new Node(value);

    if (this.length === 0) {
      this.first = node;
      this.last = node;
    }

    this.last.next = node;
    this.last = node;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    const second = this.first.next;
    this.first.next = null;
    this.first = second;

    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();
queue.enqueue("joy");
queue.enqueue("matt");
queue.enqueue("pavel");
queue.enqueue("samir");
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
// joy, matt, pavel, samir
