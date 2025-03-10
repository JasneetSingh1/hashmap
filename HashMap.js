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
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let hashed = this.hash(key);

    if (this.bucket[hashed] != null) {
      if (this.bucket[hashed].contains(key)) {
        let index = this.bucket[hashed].find(key);
        this.bucket[hashed].removeAt(index);
        this.bucket[hashed].append({ [key]: value });
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

    if (this.count / this.capacity > this.loadFactor) {
      let pairs = [];
      let end = [];

      this.bucket.forEach((bucket) => {
        if (bucket != null) {
          pairs.push(bucket.getValues());
        }
      });

      const res = pairs.flat();
      this.capacity = this.capacity * 2;
      this.bucket = Array.from({ length: this.capacity });
      this.count = 0;
      res.forEach((obj) => {
        for (const [key, value] of Object.entries(obj)) {
          this.set(key, value);
        }
      });
    }

    return this.bucket;
  }

  reHash() {
    let pairs = [];
    let end = [];
    this.bucket.forEach((bucket) => {
      if (bucket != null) {
        pairs.push(bucket.getValues());
      }
    });

    const res = pairs.flat();

    res.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        end.push(`${key}: ${value}`);
      }
    });
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

  has(key) {
    let hashed = this.hash(key);
    if (this.bucket[hashed] != null) {
      if (this.bucket[hashed].contains(key)) return true;
    }
    return false;
  }

  remove(key) {
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

  clear() {
    this.bucket = Array.from({ length: this.capacity });
    this.count = 0;
  }

  keys() {
    let pairs = [];
    let end = [];
    this.bucket.forEach((bucket) => {
      if (bucket != null) {
        pairs.push(bucket.getValues());
      }
    });

    const res = pairs.flat();

    res.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        end.push(`${key}`);
      }
    });
    return end;
  }

  values() {
    let pairs = [];
    let end = [];
    this.bucket.forEach((bucket) => {
      if (bucket != null) {
        pairs.push(bucket.getValues());
      }
    });

    const res = pairs.flat();

    res.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        end.push(`${value}`);
      }
    });
    return end;
  }

  entries() {
    let pairs = [];
    let end = [];
    this.bucket.forEach((bucket) => {
      if (bucket != null) {
        pairs.push(bucket.getValues());
      }
    });

    const res = pairs.flat();

    res.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        end.push([`${key}: ${value}`]);
      }
    });

    return end;
  }
}
const test = new HashMap(); // or HashMap() if using a factory
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
//This will make your load levels exceed your load factor, triggering your hash map’s growth functionality and doubling its capacity:
// test.set('moon', 'silver')
