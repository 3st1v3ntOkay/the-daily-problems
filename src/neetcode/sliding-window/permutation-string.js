/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const mycheckInclusion = function(s1, s2) {
  let res = false;

  const cond1 = s2.includes(s1)
  // const w = s1.split("").toReversed().join("")

  let w =''
  for (let i =0; i < s1.length; i++) {
    console.log("first " + s1[i])
    for (let value of s1) {
      console.log(value)
    }
  }

  const cond2 = s2.includes(w)

  if (cond1 || cond2) {
    res = true;
  }

  return res;
};

const neetCodeCheckInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Count = [0] * 26,
    s2Count =  [0] * 26;

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - "a".charCodeAt()] += 1;
    s2Count[s2.charCodeAt(i) - "a".charCodeAt()] += 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    matches += (1)
  }
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const jasperdybCheckInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  const targetMap = new Map();

  for (const letter of s1) {
    const exist = targetMap.get(letter);
    if (exist) {
      targetMap.set(letter, exist + 1);
    } else {
      targetMap.set(letter, 1);
    }
  }

  for (let windowHead = 0; windowHead <= s2.length - s1.length; windowHead++) {
    const trackMap = new Map();

    for (let testHead = 0; testHead < s1.length; testHead++) {
      const letterTest = s2[windowHead + testHead];
      const exist = targetMap.get(letterTest);

      if (exist) {
        trackMap.set(
          letterTest,
          trackMap.get(letterTest) ? trackMap.get(letterTest) + 1 : 1
        );

        if (trackMap.get(letterTest) > exist) {
          break;
        }

        if (testHead + 1 === s1.length) {
          return true;
        }
      } else {
        break;
      }
    }
  }

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // @astiksarathe: https://leetcode.com/problems/permutation-in-string/solutions/3139408/sliding-window-clean-and-concise-java-javascript-solution/

  const arr1 = new Array(26).fill(0); // === range() from Python
  const arr2 = new Array(26).fill(0);
  const len = s1.length;

  for(let ind = 0; ind < len; ind++){
    const index = getCharCode(s1[ind]);
    arr1[index]++;
  }

  for(let ind = 0; ind < s2.length; ind++){
    if(ind >= len){
      if(compare(arr1, arr2)) return true;
      arr2[getCharCode(s2[ind - len])]--; 
    }

    arr2[getCharCode(s2[ind])]++; 
  }

  return compare(arr1, arr2);
};

const compare = (arr1, arr2) => {
  for(let ind = 0; ind < 26; ind++){
    if(arr1[ind] !== arr2[ind]) return false
  }
  return true;
}

const getCharCode = (char) => {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

const s1 = "ba", s2 = "eidbaooo";

jasperdybCheckInclusion(s1, s2)

// Ver como hacerle para mostar todas las posibles combinaciones que tiene una palabra