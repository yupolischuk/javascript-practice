let LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.isEmpty())  {
      return null;
    }

    // Just read the value from the start of linked list without deleting it
    return this.linkedList.head.value;
  }

  /**
   * @param {*} value
   */
  push(value) {
    this.linkedList.addAtHead(value);
  }

  /**
   * @return {*}
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead : null;
  }

  /**
   * {*[]}
   */
  toArray() {
    // return this.linkedList
    //   .toArray
    //   .map(linkedListNode => linkedListNode.value);
    return this.linkedList.toArray();
  }

  /**
   * @param {function } [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

//const stack = new Stack();
//console.log(stack.toArray());