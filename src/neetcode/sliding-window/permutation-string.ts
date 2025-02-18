function checkInclusion(
  string1: string,
  string2: string,
): boolean {
  let res: boolean = false;

  const cond1: boolean = string2.includes(string1);
  // const w = string1.split("").toReversed().join("")

  let w: string = '';

  for (let i = 0; i < string1.length; i++) {
    console.log("first " + string1[i]);

    for (let value of string1) {
      console.log(value);
    }
  }

  const cond2: boolean = string2.includes(w);

  if (cond1 || cond2) {
    res = true;
  }

  return res;
}

function checkInclusionAlt1(
  string1: string,
  string2: string,
): void | boolean {
  if (string1.length > string2.length) {
    return false;
  }

  // what i try to do here???
  // let s1Count = [0] * 26;
  // let s2Count = [0] * 26;

  let s1Count: number[] = new Array(26).fill(0);
  let s2Count: number[] = new Array(26).fill(0);

  for (let i = 0; i < string1.length; i++) {
    s1Count[string1.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    s2Count[string2.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }

  let matches: number = 0;

  for (let i = 0; i < 26; i++) {
    matches += (1)
  }
}

function checkInclusionAlt2(
  string1: string,
  string2: string,
): boolean {
  if (string1.length > string2.length) {
    return false;
  }

  const targetMap = new Map<string, number>();

  for (const letter of string1) {
    const exist: number | undefined = targetMap.get(letter);

    if (exist) {
      targetMap.set(letter, exist + 1);
    } else {
      targetMap.set(letter, 1);
    }
  }

  for (let windowHead = 0; windowHead <= string2.length - string1.length; windowHead++) {
    const trackMap = new Map<string, number>();

    for (let testHead = 0; testHead < string1.length; testHead++) {
      const letterTest: string = string2[windowHead + testHead];
      const exist: number | undefined = targetMap.get(letterTest);

      if (exist) {
        // improve this logic
        trackMap.set(
          letterTest,
          trackMap.get(letterTest) ? trackMap.get(letterTest)! + 1 : 1
        );

        // improve this logic
        if (trackMap.get(letterTest)! > exist) {
          break;
        }

        if (testHead + 1 === string1.length) {
          return true;
        }
      }
      else {
        break;
      }
    }
  }

  return false;
}

// @astiksarathe: https://leetcode.com/problems/permutation-in-string/solutions/3139408/sliding-window-clean-and-concise-java-javascript-solution/
function checkInclusionAlt3(
  string1: string,
  string2: string,
): boolean {
  const arr1: number[] = new Array(26).fill(0);
  const arr2: number[] = new Array(26).fill(0);

  const len: number = string1.length;

  for (let ind = 0; ind < len; ind++) {
    const index: number = getCharCode(string1[ind]);

    arr1[index]++;
  }

  for (let ind = 0; ind < string2.length; ind++) {
    if (ind >= len) {
      if (compare(arr1, arr2)) {
        return true;
      }

      arr2[getCharCode(string2[ind - len])]--;
    }

    arr2[getCharCode(string2[ind])]++;
  }

  return compare(arr1, arr2);
}

const compare = (
  arr1: number[],
  arr2: number[],
): boolean => {
  for (let ind = 0; ind < 26; ind++) {
    if (arr1[ind] !== arr2[ind]) {
      return false;
    }
  }

  return true;
}

const getCharCode = (char: string): number => {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

const input1: string = "ba";
const input2: string = "eidbaooo";

checkInclusion(input1, input2);
checkInclusionAlt1(input1, input2);
checkInclusionAlt2(input1, input2);
checkInclusionAlt3(input1, input2);

// Ver como hacerle para mostar todas las posibles combinaciones que tiene una palabra
