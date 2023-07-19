// 10 -> 5 -> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = { value: value, next: null };
    this.tail.next = node;
    this.tail = node;

    this.length++;

    return this;
  }

  prepend(value) {
    const node = { value: value, next: null };
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  //   insert(index, value) {
  //     let currentNode = this.head;
  //     let prevNode = {};
  //     let counter = 0;

  //     if (index >= this.length) {
  //       return this.append(value);
  //     }

  //     if (index === 0) {
  //       this.prepend(value);
  //     }

  //     while (counter !== index) {
  //       prevNode = currentNode;
  //       currentNode = currentNode.next;
  //       counter++;
  //     }

  //     const newNode = { value, next: null };
  //     prevNode.next = newNode;
  //     newNode.next = currentNode;

  //     this.length++;
  //   }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const node = { value: value, next: null };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = node;
    node.next = holdingPointer;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(50);
myLinkedList.insert(2, 99);
myLinkedList.printList();
// console.log(myLinkedList);
