/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  // if (!digits.length) {
  //   return "";
  // }

  // const keyboard = {
  //   2: "abc",
  //   3: "def",
  //   4: "ghi",
  //   5: "jkl",
  //   6: "mno",
  //   7: "pqrs",
  //   8: "tuv",
  //   9: "wxyz",
  // }
  
  // let backup = [];
  // for (let letter of digits) {
  //   backup.push(letter);
  // }
  
  // let alpha = [];
  // for (let key of backup) {
  //   alpha.push(keyboard[key]);
  // }
  
  // let ultimate = [];
  // let counterCurr = 0,
  //     counterNext = 1;
  // for (let curr = 0; curr < alpha.length; curr++) {
  //   // abc
  //   for (let next = 0; next < alpha[curr].length; next++) {
  //     // def
  //     console.log([alpha[curr][counterCurr], alpha[counterNext][next]]);
  //   }
  // }

  let output = [];
  const keyboard = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }

  /**
   * @param {number} index 
   * @param {string} currentString 
   */
  function backtrack(index, currentString) {
    if (currentString.length === digits.length) {
      output.push(currentString);
      return;
    }

    for (let character of keyboard[digits[index]]) {
      backtrack(index + 1, currentString + character);
    }
  }

  if (digits) {
    backtrack(0, "");
  }

  return output;
}

const digits = "23";
letterCombinations(digits);
