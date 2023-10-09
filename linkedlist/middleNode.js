var middleNode = function (head) {
  let current = head;
  let counter = 0;

  // loop through & increase counter to get the length
  while (current !== null) {
    counter++;
    current = current.next;
  }

  // divide counter by 2 & round down
  let middleValue = Math.floor(counter / 2);

  // reset the current node
  current = head;

  // go to the node and and increment counter
  // we dont have to use a while loop because we know how many times we want to iterate
  for (let i = 0; i < middleValue; i++) {
    current = current.next;
  }

  return current;
};
