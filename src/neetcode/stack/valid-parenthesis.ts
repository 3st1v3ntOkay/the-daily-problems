type OpenSymbols = "(" | "[" | "{";

function IsDiff(
  input: string,
  symbol: OpenSymbols,
): boolean {
  return input !== symbol;
}

function isValid(s: string): boolean | void {
  if (!s.length) {
    return;
  }

  let stack: string[] = [];
  for (let newStr of s) {
    if (
      newStr === "(" ||
      newStr === "[" ||
      newStr === "{"
    ) {
      stack.push(newStr);
    }
    else {
      let lastStackValue = stack[stack.length - 1];

      if (
        (newStr === ")" && lastStackValue !== "(") ||
        (newStr === "]" && lastStackValue !== "[") ||
        (newStr === "]" && lastStackValue !== "{")
      ) {
        return false;
      }

      stack.pop();
    }
  }

  return !stack.length;
};

const input: string = "{{{{{{[()]}}}}}}";

console.log(isValid(input));
