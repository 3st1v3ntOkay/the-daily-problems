/**
 * @param {string} string 
 * @returns 
 */
function isPalindrome(string) {
  let left = 0,
      right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

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

  /**
   * @param {number} index 
   * @returns 
   */
  function dfs(index) {
    if (index === s.length) {
      res.push([...part]);
      return;
    }
    
    for (let end = index + 1; end <= s.length; end++) {
      const sub = s.substring(index, end);
      
      if (isPalindrome(sub)) {
        part.push(sub);
        dfs(end);
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
