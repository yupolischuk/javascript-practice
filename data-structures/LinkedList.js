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
    let node = new Node(val);
    node.next = this.head;
    this.head = node;

    this.size++;
  }

  addAtTail(val) {

  }

  addAtIndex(index, val) {

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
linkedList.addAtHead(3);
linkedList.addAtHead(5);
linkedList.addAtHead(7);
linkedList.addAtHead(9);
linkedList.addAtHead(15);
linkedList.addAtHead(21);
linkedList.addAtHead(55);
console.log(util.inspect(linkedList, false, null, true));
console.log('******************************');
console.log(linkedList.listAll());

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