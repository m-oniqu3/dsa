function insert(index, value) {
  if (index < 0 || index > this.length) {
    throw new Error("Invalid index");
  }

  if (index === 0) {
    this.prepend(value);
    return;
  }

  let currentNode = this.head;
  let prevNode = null;
  let counter = 0;

  while (counter !== index) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    counter++;
  }

  const newNode = new Node(value);
  prevNode.next = newNode;
  newNode.next = currentNode;

  this.length++;
}
