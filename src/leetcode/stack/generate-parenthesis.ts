function generateParenthesis(n: number): string[] {
  let stack: string[] = [];
  let res: string[] = [];

  const checkPara = (
    open: number,
    close: number,
  ): void => {
    if (open === close && open === n) {
      res.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      checkPara(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      checkPara(open, close + 1);
      stack.pop();
    }
  }

  checkPara(0, 0);
  return res;
}

const input: number = 2;

generateParenthesis(input);
