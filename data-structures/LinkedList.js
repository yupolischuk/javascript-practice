const util = require('util');


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return false;
    }

    if (!this.head) {
      return false;
    }

    let current = this.head;
    let counter = 0;
    
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    
    return current.val;
  }

  addAtHead(val) {
    console.log('add at head called!');
    let node = new Node(val);
    node.next = this.head;
    this.head = node;

    this.size++;
  }

  addAtTail(val) {
    let current = this.head;

    if (!current) {
      this.head = new Node(val);
      // todo add
      /*
          node.next = this.head;
          this.head = node;
      */
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    }
    this.size++;
  }

  addAtIndex(index, val) {
    let current = this.head;

    if (index < 0 || index > this.size) {
      return false;
    }
    if (!current) {
      this.addAtHead(val);
      
      // this.head = new Node(val);
    } else {
      let current = this.head;
      let counter = 0;

      while (counter < (index-1)) {
        current = current.next;
        counter++;
      }

      let node = new Node(val);
      node.next = current.next;
      current.next = node;

      this.size++;
    }
  }

  deleteAtIndex(index) {

  }

  listAll() {
    // returns array
    let res = [];
    let current = this.head;
    let counter = 0;

    while (counter < this.size) {
      res.push(current.val);
      current = current.next;
      counter++;
    }

    return res;
  }
}


const linkedList = new LinkedList();

linkedList.addAtIndex(0, 7);
console.log(linkedList.listAll());

// linkedList.addAtHead(3);
// linkedList.addAtHead(5);
// linkedList.addAtHead(7);
// linkedList.addAtHead(9);
// linkedList.addAtHead(15);
// linkedList.addAtHead(21);
// linkedList.addAtHead(55);

// linkedList.addAtTail(77);
// linkedList.addAtTail(55);
// linkedList.addAtIndex(5, 799999999999);
// console.log(util.inspect(linkedList, false, null, true));
// console.log('******************************');
// console.log(linkedList.get(5));
// console.log(linkedList.listAll());

// console.log(linkedList.get(0));
// console.log(linkedList.get(4));
// console.log(linkedList.get(6));
// console.log(linkedList.get(7));


// linkedList.addAtHead(3);
// console.log(util.inspect(linkedList, false, null, true));
// console.log(linkedList.get(1));



// MyLinkedList linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
// linkedList.get(1);            // returns 2
// linkedList.deleteAtIndex(1);  // now the linked list is 1->3
// linkedList.get(1);            // returns 3