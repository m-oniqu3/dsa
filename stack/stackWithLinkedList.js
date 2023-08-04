class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  // the list is backwards
  push(value) {
    if (!value) return "Submit a value to add to stack";

    const node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// const stack = new Stack();

// stack.push("google");
// stack.push("udemy");
// stack.push("discord");
// stack.push("Pinterest");
// stack.pop();
// console.log(stack);

module.exports = Stack;
