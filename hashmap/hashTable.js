class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    //hash the key
    const address = this._hash(key);

    // if there is nothing at the address then create an empty array
    if (!this.data[address]) {
      this.data[address] = [];
    }

    //push an array into the array at the address
    this.data[address].push([key, value]);
  }

  get(key) {
    //hash the key
    const address = this._hash(key);

    //get the array at the address
    const currentBucket = this.data[address];

    if (currentBucket) {
      // loop through the array and check if the element at the 1st index === key
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          //return the value
          return currentBucket[i][1];
        }
      }
    }
    // key doesn't exist
    return undefined;
  }

  // inefficient because we had to loop throught everything to get our keys
  keys() {
    const keysArray = [];

    //loop through all the array
    for (let i = 0; i < this.data.length; i++) {
      // if there is an element at index i then add the value to keysArray
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");

console.log(myHashTable);

//set - accept key value pair
// hash key, insert it at the index
