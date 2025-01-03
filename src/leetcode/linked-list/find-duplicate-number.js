class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayFindDuplicate = function(nums) {
  let hash = new Map();
  let double = [];

  for (let key of nums) {
    if (hash.has(key)) {
      hash.set(key, hash.get(key) + 1);
    } else {
      hash.set(key, 1);
    }
  }

  for (let [key, value] of hash) {
    if (value > 1) {
      double.push(key);
    }
  }

  console.log(double);
  return double;
};

// @vanAmsen - highly recommended
const amsenFindDuplicate1 = function(nums) {
  const seen = new Set();

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

const amsenFindDuplicate2 = function(nums) {
  let slow = nums[0];
  let fast = nums[0];

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

const nums = [1, 3, 4, 2, 2];
// amsenFindDuplicate1(nums);
amsenFindDuplicate2(nums);

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    
};

const a = new ListNode(1);
const b = new ListNode(3);
const c = new ListNode(4);
const d = new ListNode(2);
const e = new ListNode(2);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// arrayFindDuplicate(a);