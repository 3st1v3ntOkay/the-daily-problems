/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (!s.length) return;

  let stack = [];
  for (let newStr of s) {
    if (newStr === "(" || newStr === "[" || newStr === "{") {
      stack.push(newStr);
    } else {
      if (
        (newStr === ")" && stack[stack.length - 1] !== "(") ||
        (newStr === "]" && stack[stack.length - 1] !== "[") ||
        (newStr === "}" && stack[stack.length - 1] !== "{")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return !stack.length;
};

isValid("{{{{{{[()]}}}}}}");
