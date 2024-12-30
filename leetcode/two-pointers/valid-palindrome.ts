function isPalindrome(s: string): boolean {
  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
    }
    else if (!isAlphaNumeric(s[right])) {
      right--;
    }
    else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    else {
      left++;
      right--;
    }
  }

  return true;
}

function isAlphaNumeric(char: string): boolean {
  const code: number = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

const input: string = "eye";

isPalindrome(input);
