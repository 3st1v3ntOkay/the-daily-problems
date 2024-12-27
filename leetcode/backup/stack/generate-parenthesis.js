/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  let stack = [];
  let res = [];

  const checkPara = (open, close) => {
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
  };

  checkPara(0, 0);
  return res;
};

generateParenthesis(2);
