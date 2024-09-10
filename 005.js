class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  check() {
    if(this.isEmpty()){
      return null;
    }

    return this.stackList[this.stackList.length - 1];
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if(this.isEmpty()) return null;
    return this.stackList.pop();
  }
}


class MyQueue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  isEmpty() {
    return this.firstStack.isEmpty();
  }

  check() {
    return this.firstStack.check();
  }

  enqueue(value) {
    while(!this.firstStack.isEmpty()) {
      this.secondStack.push(this.firstStack.pop());
    }
    this.firstStack.push(value);

    while(!this.secondStack.isEmpty()) {
      this.firstStack.push(this.secondStack.pop());
    }
  }
}

module.exports = MyQueue;