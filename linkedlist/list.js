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

  // insert(index, value) {
  //   let currentNode = this.head;
  //   let prevNode = {};
  //   let counter = 0;

  //   if (index >= this.length) {
  //     return this.append(value);
  //   }

  //   if (index === 0) {
  //     this.prepend(value);
  //   }

  //   while (counter !== index) {
  //     prevNode = currentNode;
  //     currentNode = currentNode.next;
  //     counter++;
  //   }

  //   const newNode = { value, next: null };
  //   prevNode.next = newNode;
  //   newNode.next = currentNode;

  //   this.length++;
  // }

  // Traverses the linked list to the specified index and returns the
  // corresponding node

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    // Iterate through the linked list until the index is reached
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // Inserts a new node with the given value at the specified index in the linked list
  insert(index, value) {
    // If the index is greater than length of the linked list, append the node at the end
    if (index >= this.length) {
      return this.append(value);
    }

    const node = { value: value, next: null };

    // Find the node at the previous index to the given index
    const leader = this.traverseToIndex(index - 1);

    // Store the reference to the next node after the leader (node at the given index)
    const holdingPointer = leader.next;

    // Connect the new node to the linked list by updating the references
    // Leader points to new node , new node points to holding pointer
    leader.next = node;
    node.next = holdingPointer;
    this.length++;

    return this;
  }

  remove(index) {
    // is index valid ?
    if (index < 0 || index > this.length) {
      throw new Error("index is out of bounds ");
    }

    // is index the head
    if (index === 0) {
      const leader = this.head;
      const holding = leader.next;

      this.head = holding;
      leader.next = null;
      this.length--;
      return this;
    }

    // is index the tail?
    if (index === this.length - 1) {
      const leader = this.traverseToIndex(this.length - 2);
      this.tail = leader;
      this.length--;
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const nodeAtIndex = leader.next;
    const nodeAfterindex = nodeAtIndex.next;

    leader.next = nodeAfterindex;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(50);
myLinkedList.insert(2, 99);
myLinkedList.remove(4);
myLinkedList.printList();
console.log(myLinkedList);
