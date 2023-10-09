class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    //return this
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  traverseToIndex(index) {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      if (counter === index) break;

      current = current.next;
      counter++;
    }

    return current;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const previousNode = this.traverseToIndex(index - 1);
    const followingNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = followingNode;
    this.length++;
  }

  remove(index) {
    if (index >= this.length) return;
    this.length--;

    if (index <= 0) {
      let nextNode = this.head.next;
      this.head.next = null;
      this.head = nextNode;
    }

    if (index === this.length - 1) {
      let prevNode = this.traverseToIndex(this.length - 2);
      prevNode.next = null;
      this.tail = prevNode;
    }

    let prevNode = this.traverseToIndex(index - 1);
    let node = prevNode.next;
    let followingNode = node.next;
    prevNode.next = followingNode;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let nextNode = null;

    while (current !== null) {
      nextNode = current.next;
      current.next = prev;

      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }
}

var middleNode = function (head) {
  let current = head;
  let counter = 0;
  let middleValue = 0;

  while (current !== null) {
    counter++;
    current = current.next;
  }
  middleValue = Math.floor(counter / 2);

  function traverseToIndex(index) {
    let current = head;
    let currIndex = 0;

    while (current !== null) {
      if (currIndex === index) {
        return current;
      }

      currIndex++;
      current = current.next;
    }
  }

  return traverseToIndex(middleValue);
};
