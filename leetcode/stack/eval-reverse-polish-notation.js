/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  let stack = [];

  for (let token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      let sec = stack.pop();
      let fir = stack.pop();
      stack.push(fir - sec);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      let sec = stack.pop();
      let fir = stack.pop();
      stack.push(Math.trunc(fir / sec));
    } else {
      stack.push(Number(token));
    }
  }

  return stack;
};

evalRPN(["2", "1", "+", "3", "*"]);
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
