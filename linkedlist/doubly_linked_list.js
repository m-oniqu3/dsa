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
list.printList();
