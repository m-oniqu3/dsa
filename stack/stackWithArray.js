function StackWithArray() {
  this.stack = [];
  this.length = 0;
}

StackWithArray.prototype.peek = function () {
  return this.stack[this.length - 1];
};

StackWithArray.prototype.push = function (value) {
  const index = this.length;
  this.stack[index] = value;
  this.length++;
  return this;
};

StackWithArray.prototype.pop = function () {
  if (this.length === 0) return null;
  this.length--;
  return this.stack.pop();
};

StackWithArray.prototype.isEmpty = function () {
  return this.length === 0;
};

// const stack = new StackWithArray();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack);
// console.log(stack.pop());
// console.log(stack);

module.exports = StackWithArray;
