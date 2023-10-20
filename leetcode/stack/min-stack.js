// class MinStack {
//   constructor() {
//     this.stack = [];
//   }

//   push(val) {
//     if (typeof val !== 'number') return;
//     this.stack.push(val);

//     this.stack.sort((a, b) => a - b)
//   }

//   pop() {
//     this.stack.pop();
//   }

//   top() {
//     return this.stack[this.stack.length-1];
//   }

//   getMin() {
//     return this.stack[0];
//   }
// }

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const poppedElement = this.stack.pop();

    if (poppedElement === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const useClass = new MinStack();

useClass.push(-3);
useClass.push(4);
useClass.push("v");

useClass.top();
useClass.getMin();
