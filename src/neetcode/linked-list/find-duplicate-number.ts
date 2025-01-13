class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number, next?: ListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function arrayFindDuplicate(nums: number[]): number[] {
  let hash = new Map<number, number>();
  let output: number[] = [];

  for (let key of nums) {
    if (hash.has(key)) {
      hash.set(key, hash.get(key)! + 1);
    }
    else {
      hash.set(key, 1);
    }
  }

  for (let [key, value] of hash) {
    if (value > 1) {
      output.push(key);
    }
  }

  console.log(output);
  return output;
}

// @vanAmsen - highly recommended
function arrayFindDuplicateAlt1(nums: number[]): number {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      console.log(num);
      return num;
    }

    seen.add(num);
  }

  console.log(-1);
  return -1;
}

function arrayFindDuplicateAlt2(nums: number[]): number {
  let slow: number = nums[0];
  let fast: number = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  console.log(slow)
  return slow;
}

const input: number[] = [1, 3, 4, 2, 2];

arrayFindDuplicate(input);
arrayFindDuplicateAlt1(input);
arrayFindDuplicateAlt2(input);

// const a = new ListNode(1);
// const b = new ListNode(3);
// const c = new ListNode(4);
// const d = new ListNode(2);
// const e = new ListNode(2);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// arrayFindDuplicate(a);