function isPalindrome(string: string): boolean {
  let left: number = 0;
  let right: number = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    [left, right] = [left + 1, right - 1];
  }

  return true;
}

const partition = function (string: string): string[][] {
  if (!string.length) {
    return [];
  }

  let res: string[][] = [];
  let part: string[] = [];

  function dfs(index: number): void {
    if (index === string.length) {
      res.push([...part]);
      return;
    }

    for (let end = index + 1; end <= string.length; end++) {
      const sub = string.substring(index, end);

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

const input: string = "aab";
partition(input);

const input2: string = "a";
partition(input2);
