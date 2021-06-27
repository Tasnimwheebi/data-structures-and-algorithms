class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  set(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;
    return hash;
  }
  add(key,value){
    let hash = this.hash(key);
    if(!this.table[hash]){
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = {[key]:value};
    this.table[hash].add(keyValuePair);
  }
  get(key){
    let arr = [];
    let hash = this.hash(key);
    if(this.table[hash]){
      this.table.map((list) => {
        let current = list.head.value;
        if(Object.keys(current) === key){
          arr.push(Object.values(current));
          return Object.values(current);
        }
      });
    }
    return arr;
  }
  contains(key){
    if(this.table.includes(key)){
      return true;
    }
    return null;
  }
}

module.exports = Node,LinkedList,HashTable ;
