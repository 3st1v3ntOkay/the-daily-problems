function evalRPN(tokens: string[]): number[] {
  let stack: number[] = [];

  for (let token of tokens) {
    if (token === "+") {
      stack.push(stack.pop()! + stack.pop()!);
    }
    else if (token === "-") {
      let sec = stack.pop();
      let fir = stack.pop();
      stack.push(fir! - sec!);
    }
    else if (token === "*") {
      stack.push(stack.pop()! * stack.pop()!);
    }
    else if (token === "/") {
      let sec = stack.pop();
      let fir = stack.pop();
      stack.push(Math.trunc(fir! / sec!));
    }
    else {
      stack.push(Number(token));
    }
  }

  return stack;
}

const input1: string[] = ["2", "1", "+", "3", "*"];
const input2: string[] = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

evalRPN(input1);
evalRPN(input2);
