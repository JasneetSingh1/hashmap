import { LinkedList, Node } from "./LinkedList.js";

class HashMap {
  constructor() {
    this.count = 0;
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.bucket = Array.from({ length: this.capacity });
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }

  set(key, value) {
    let hashed = this.hash(key);

    if (this.bucket[hashed] != null) {
      if (this.bucket[hashed].contains(key)) {
        let index = this.bucket[hashed].find(key);
        this.bucket[hashed].removeAt(index);
        this.bucket[hashed].insertAt(value, index);
      } else {
        this.bucket[hashed].append({ [key]: value });
        this.count++;
      }
    } else {
      let linked = new LinkedList();
      linked.append({ [key]: value });
      this.bucket[hashed] = linked;
      this.count++;
    }

    return this.bucket;
  }

  length() {
    return this.count;
  }
  get(key) {
    let hashed = this.hash(key);
    if (this.bucket[hashed] != null) {
      return this.bucket[hashed].contains(key);
    }
    return null;
  }

  has(key){
    let hashed = this.hash(key);
    if (this.bucket[hashed] != null) {
      if( this.bucket[hashed].contains(key)) return true;
    }
    return false;
  }

  remove(key){
    let hashed = this.hash(key);

    if (this.bucket[hashed] != null) {
      if (this.bucket[hashed].contains(key)) {
        let index = this.bucket[hashed].find(key);
        this.bucket[hashed].removeAt(index);
        this.count--;
        return true;
      }
      return false;
    }
    return false;
  }

  clear(){
    this.bucket = Array.from({length: this.capacity});
    this.count = 0;

  }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");

console.log(test.set("lion", "golden"));
console.log(test.length());
console.log(test.has("lion"));
test.remove('lion')
console.log(test.has("lion"));
console.log(test.length());
test.clear();
console.log(test.set("lion", "golden"));
console.log(test.length());