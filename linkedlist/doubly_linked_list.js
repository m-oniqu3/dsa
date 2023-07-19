class DoublyLinkedList {
  constructor(value) {
    this.head = { value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = { value, next: null, prev: this.tail };
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = { value, next: this.head, prev: null };
    this.head = node;
    this.length++;
    return this;
  }

  traverseList(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index < 0) throw new Error("index out of bounds");

    if (index > this.length) {
      this.length++;
      return this.append(value);
    }

    if (index === 0) {
      this.length++;
      return this.prepend(value);
    }

    let node = { value, next: null, prev: null };
    const leader = this.traverseList(index - 1);
    const nodeAtIndex = leader.next;
    leader.next = node;
    node.next = nodeAtIndex;
    node.prev = leader;
    this.length++;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      throw new Error("index out of bounds");
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }

    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return this;
    }

    const leader = this.traverseList(index - 1);
    const nodeAtIndex = leader.next;
    const nodeAfterindex = nodeAtIndex.next;

    leader.next = nodeAfterindex;
    nodeAfterindex.prev = leader;
    this.length--;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }
}

const list = new DoublyLinkedList(5);
list.append(8);
list.prepend(1);
list.append(20);
list.prepend(12);
list.prepend(30);
list.insert(3, 3);
list.remove(3);
list.printList();
