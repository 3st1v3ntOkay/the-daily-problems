function characterReplacement(
  string: string,
  k: number,
): number {
  let left: number = 0;
  let right: number = 0;

  let maxCharCount: number = 0;
  const visited = new Map();

  while (right < string.length) {
    console.log(visited)

    const char: string = string[right];

    // visited[char] = visited[char] ? visited[char] + 1 : 1;
    if (visited.has(char)) {
      visited.set(char, visited.get(char) + 1);
    }
    else {
      visited.set(char, 1);
    }

    // if (visited[char] > maxCharCount)
    if (visited.get(char) > maxCharCount) {
      // maxCharCount = visited[char];
      maxCharCount = visited.get(char);
    }

    // add () to make it more readable
    if (right - left + 1 - maxCharCount > k) {
      // visited[string[left]]--;
      visited.set(string[left], visited.get(char) - 1);
      left++;
    }

    right++;
  }

  console.log(right - left);
  return right - left;
}

const input1: string = "ABAB";
const k1: number = 2;

const input2: string = "AABABBA";
const k2: number = 1;

characterReplacement(input1, k1);
characterReplacement(input2, k2);
