function isPalindrome(string, left, right) {
  while (left < right) {
    if (string[left] !== string[right]) return false;
    [left, right] = [left + 1, right - 1];
  }

  return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
  if (!s.length) return [];

  let res = [],
      part = [];

  function dfs(index) {
    if (index >= s.length) {
      res.push(part);
      return;
    }
    
    for (let j = index; j < s.length; j++) {
      if (isPalindrome(s, index, j)) {
        part.push(s.substring(index, j+1));
        dfs(j + 1);
        part.pop();
      }
    }
  }

  dfs(0);
  return res;
}

const s = "aab";
partition(s);

const s2 = "a";
partition(s2);
