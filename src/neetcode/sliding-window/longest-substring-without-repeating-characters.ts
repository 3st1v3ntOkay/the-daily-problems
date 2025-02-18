// String.prototype.substring(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function lengthOfLongestSubstring(string: string): number {
  let words: string[] = [];
  let word: string = "";

  for (let i = 0; i < string.length; i++) {
    if (word.includes(string[i])) {
      words.push(word);
      word = "";
      word = word.concat(string[i]);
    }
    else {
      word = word.concat(string[i]);
      console.log(word);
    }
  }

  console.log(word);
  console.log(words);

  let longest: number = words[0]?.length;

  for (let value of words) {
    if (longest < value.length) {
      longest = value.length;
    }
  }

  console.log(longest);
  return longest;
};

// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/
function lengthOfLongestSubstringAlt1(string: string): number {
  let charSet = new Set<string>();

  let left: number = 0;
  let res: number = 0;

  // this could be removed
  if (string.length === 0) {
    return 0;
  }

  // this could be removed too
  if (string.length === 1) {
    return 1;
  }

  for (let i = 0; i < string.length; i++) {
    while (charSet.has(string[i])) {
      charSet.delete(string[left]);
      left++;
    }

    charSet.add(string[i]);
    res = Math.max(res, i - left + 1);
  }

  return res;
}

// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4349365/everything-you-need-beginner-friendly-full-explanation/
function lengthOfLongestSubstringAlt2(string: string): number {
  const dict: number[] = Array(256).fill(-1);

  let maxLen: number = 0;
  let start: number = -1;

  for (let i = 0; i < string.length; i++) {
    if (dict[string.charCodeAt(i)] > start) {
      start = dict[string.charCodeAt(i)];
    }

    dict[string.charCodeAt(i)] = i;
    maxLen = Math.max(maxLen, i - start);
  }

  return maxLen;
}

const input1: string = "abcabcbb";
const input2: string = "bbbbb";
const input3: string = "pwwkew";

lengthOfLongestSubstring(input1)
lengthOfLongestSubstringAlt1(input2);
lengthOfLongestSubstringAlt2(input3);
