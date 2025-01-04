import {
  LinkedList,
  addList,
} from "../_data/LinkedList.js"

const myAddTwoNumbers = function (l1: any, l2: any) {
  let stack1 = [], stack2 = [];

  while (l1) {
    stack1.unshift(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.unshift(l2.val);
    l2 = l2.next;
  }

  const sum = Number(stack1.join("")) + Number(stack2.join(""))

  const newArray = []
  for (let value of String(sum)) {
    newArray.unshift(value)
  }
  console.log(newArray)

  let res = null
  let pivot = null
  while (newArray.length) {
    let node = new LinkedList(newArray.shift());

    if (res) {
      pivot.next = node;
      pivot = pivot.next;
    } else {
      res = node;
      pivot = res;
    }
  }

  console.log(res)
  return res
}; // it just fail for 3 test cases

const addTwoNumbers = function (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  // @neetcode video
  let dummy = new ListNode(),
    current = dummy;

  let carry = 0;
  while (l1 || l2) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;

    current.next = new ListNode(val);

    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  // @Akhilesh21 help
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}

const l1: ListNode = addList(2, 4, 3);
const l2: ListNode = addList(5, 6, 4);

addTwoNumbers(l1, l2);


/* dummie way, pffff

  const a = new ListNode(2);
  const b = new ListNode(4);
  const c = new ListNode(3);

  a.next = b;
  b.next = c;

  const d = new ListNode(5);
  const e = new ListNode(6);
  const f = new ListNode(4);

  d.next = e;
  e.next = f;


  const l1 = a, l2 = d;

  addTwoNumbers(l1, l2);
*/
