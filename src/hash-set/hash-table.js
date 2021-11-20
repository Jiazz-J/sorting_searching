class HashTable {
  constructor(size = 53) {
    this.size = size;
    this.keyMap = new Array(size);
  }

  hash(key) {
    const PRIME_NUMBER = 31;
    let total = 0;

    for (let i = 0; i < Math.min(key.length); i++) {
      const charVal = key.charCodeAt(i);
      total += charVal * PRIME_NUMBER;
    }
    return total % this.size;
  }

  set(key, value) {
    const hashedKey = this.hash(key, this.size);

    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    this.keyMap[hashedKey].push([key, value]);

    /*  const valueInArr = this.keyMap[hashedKey];
    console.log(hashedKey, 'hkey');

    if (!valueInArr) {
      this.keyMap[hashedKey] = value;
    } else {
      if (typeof valueInArr === 'string') {
        this.keyMap[hashedKey] = [[valueInArr], [key, value]];
      } else {
        this.keyMap[hashedKey].push([key, value]);
      }
    } */
  }
}

const hashTable = new HashTable();
hashTable.set('Hello', 'value for Hello');
hashTable.set('Hello', 'value for Hello');
console.log(hashTable.keyMap);
