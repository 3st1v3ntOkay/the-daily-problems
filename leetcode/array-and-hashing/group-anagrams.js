/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = new Map();
  let array = [];

  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("");
    if (obj.has(temp)) {
      obj.set(temp, obj.get(temp) + " " + strs[i]);
    } else {
      obj.set(temp, strs[i]);
    }
  }

  for (let value of obj) {
    array = [...array, value[1].split(" ")];
  }

  return array;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
