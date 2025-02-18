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

type TStack = string | number;

class MinStack {
  public stack: Array<TStack>;
  public minStack: Array<TStack>;

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: TStack) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const poppedElement: TStack | undefined = this.stack.pop();

    let lastMinStackValue: TStack = this.minStack[this.minStack.length - 1];

    if (poppedElement === lastMinStackValue) {
      this.minStack.pop();
    }
  }

  top(): TStack {
    return this.stack[this.stack.length - 1];
  }

  getMin(): TStack {
    return this.minStack[this.minStack.length - 1];
  }
}

const example: MinStack = new MinStack();

example.push(-3);
example.push(4);
example.push("v");

console.log(example.top());
console.log(example.getMin());
