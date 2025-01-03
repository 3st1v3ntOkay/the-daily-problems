function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let freq: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};

isAnagram("anagram", "nagaram");
