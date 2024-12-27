// String.prototype.substring(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

/**
 * @param {string} s
 * @return {number}
 */
const mylengthOfLongestSubstring = function (s) {
  let words = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (word.includes(s[i])) {
      words.push(word);
      word = "";
      word = word.concat(s[i]);
    } else {
      word = word.concat(s[i]);
      console.log(word);
    }
  }

  console.log(word);
  console.log(words);

  let longest = words[0]?.length;

  for (let value of words) {
    if (longest < value.length) {
      longest = value.length;
    }
  }

  console.log(longest);
  return longest;
};

/**
 * @param {string} s
 * @return {number}
 */
const karinaLengthOfLongestSubstring = function (s) {
  // https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/

  let charSet = new Set(),
    left = 0,
    res = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[left]);
      left++;
      // console.log(left);
    }
    
    charSet.add(s[i]);
    res = Math.max(res, i - left + 1);
    
    // console.log(charSet);
    // console.log(res);
  }

  // console.log(res);
  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
const lakshayLengthOfLongestSubstring = function (s) {
  // https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4349365/everything-you-need-beginner-friendly-full-explanation/

  const dict = Array(256).fill(-1);
  let maxLen = 0,
    start = -1;

  for (let i = 0; i < s.length; i++) {
    if (dict[s.charCodeAt(i)] > start) {
      start = dict[s.charCodeAt(i)];
    }

    dict[s.charCodeAt(i)] = i;
    maxLen = Math.max(maxLen, i - start);
  }

  // console.log(dict);
  return maxLen;
};

const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";

karinaLengthOfLongestSubstring(s1);
// karinaLengthOfLongestSubstring(s2);
// karinaLengthOfLongestSubstring(s3);

lakshayLengthOfLongestSubstring(s1);
// karinaLengthOfLongestSubstring(s2);
// karinaLengthOfLongestSubstring(s3);
