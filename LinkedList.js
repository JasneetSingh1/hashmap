class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      let newNode = new Node(value);
  
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
    }
  
    getHead() {
      return this.head;
    }
  
    getTail() {
      return this.tail;
    }
  
    size() {
      let count = 0;
      if (this.head == null) return 0;
  
      let start = this.head;
      while (start != null) {
        start = start.nextNode;
        count++;
      }
  
      return count;
    }
  
    prepend(value) {
      let newNode = new Node(value);
  
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.nextNode = this.head;
        this.head = newNode;
      }
    }
  
    getAt(index) {
      let result = this.head;
      for (let i = 0; i < index; i++) {
        if (result != null) {
          result = result.nextNode;
        }
      }
  
      return result.value;
    }
  
    pop() {
      let start = this.head;
      while (start.nextNode != this.tail) {
        start = start.nextNode;
      }
  
      let popped = start.nextNode;
      start.nextNode = null;
      this.tail = start;
      return popped;
    }
  
    contains(value) {
      let start = this.head;
      while (start != null) {
        let key = Object.keys(start.value);
        if(key == value) return start.value[value];
        start = start.nextNode;
      }
      return null;
    }
  
    find(value) {
      let start = this.head;
      let count = 0;
      while (start != null) {
        if (start.value == value) return count;
        count++;
        start = start.nextNode;
      }
      return null;
    }
  
    toString() {
      let result = " ";
      let start = this.head;
      while (start != null) {
        result = result + `( ${start.value} ) -> `;
        start = start.nextNode;
      }
      result = result + "null";
      return result;
    }
  
    insertAt(value, index) {
      let before = this.head;
      let size = this.size() - 1;
      if (index > size) return  console.log("Index out of bounds");
      if(index == 0){
          this.prepend(value);
          return;
      }
      if(index == size){
          this.append(value);
          return;
      }
     
      for (let i = 0; i < index - 1; i++) {
          
          if (before != null) {
          before = before.nextNode;
        }
      }
      let after = before.nextNode;
      let newNode = new Node(value);
      before.nextNode = newNode;
      newNode.nextNode = after;
    }
  
    removeAt(index) {
      let before = this.head;
      let size = this.size() - 1;
      if (index > size) return console.log("Index out of bounds");
      if(index == 0){
          this.head = before.nextNode;
          return;
      }
      if(index == size){
          this.pop();
          return;
      }
      for (let i = 0; i < index - 1; i++) {
        if (before != null) {
          before = before.nextNode;
        }
      }
      let after = before.nextNode.nextNode;
  
      before.nextNode = after;
    }
  }

export { LinkedList, Node };
