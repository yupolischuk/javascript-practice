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

  indexOf(value) {
    if (!this.head) {
      return false;
    }

    let current = this.head;
    let counter = 0;

    while (counter < this.size) {
      if (current.val === value) {
        return counter;
      }
      current = current.next;
      counter++;
    }
    
    return false;
  }

  addAtHead(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;

    this.size++;
  }

  addAtTail(val) {
    let current = this.head;

    if (!current) {
      this.head = new Node(val);
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
      const position = index - 1;

      while (counter < position) {
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
    if (index < 0 || index >= this.size) {
      return false;
    }

    let current = this.head;

    if (index == 0) {
      this.head = current.next;
    } else {
      let counter = 0;
      const position = index - 1;

      while (counter < position) {
        current = current.next;
        counter++;
      }
      current.next = current.next.next;
    }

    this.size--;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    let current = this.head;
    this.head = current.next;

    this.size--;
    return 'TODO return deleted head';

    //*************************** */
    // if (!this.head) {
    //   return null;
    // }
    // // TODO this.head = current.next
    // const deletedHead = this.head;

    // if (this.head.next) {
    //   this.head = this.head.next;
    // } else {
    //   this.head = null;
    //   //this.tail = null;
    // }
    // this.size--;

    // return deletedHead;
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


// const linkedList = new LinkedList();


// linkedList.addAtHead(3);
// linkedList.addAtHead(5);
// linkedList.addAtHead(7);
// linkedList.addAtHead(9);

// linkedList.addAtTail(77);
// linkedList.addAtTail(55);
// linkedList.addAtIndex(5, 799999999999);

// // console.log(util.inspect(linkedList, false, null, true));
// console.log('******************************');
// // console.log(linkedList.get(5));
// console.log(linkedList.listAll());
// linkedList.addAtIndex(7, 17);
// linkedList.addAtIndex(7, 18);
// console.log(linkedList.listAll());
// linkedList.deleteAtIndex(4);
// console.log(linkedList.listAll());
