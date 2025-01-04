import {
  LinkedList,
  addList,
} from "./data/LinkedList"

function myAddTwoNumbers(
  linkedList1: TInput,
  linkedList2: TInput,
): TInput {
  let stack1 = [];
  let stack2 = [];

  while (linkedList1) {
    stack1.unshift(linkedList1.val);
    linkedList1 = linkedList1.next;
  }

  while (linkedList2) {
    stack2.unshift(linkedList2.val);
    linkedList2 = linkedList2.next;
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
      pivot = pivot!.next;
    } else {
      res = node;
      pivot = res;
    }
  }

  console.log(res)
  return res
}; // it just fail for 3 test cases

type TInput = LinkedList | null;

// @neetcode video
function addTwoNumbers(
  linkedList1: TInput,
  linkedList2: TInput,
): TInput {
  let dummy = new LinkedList();
  let current = dummy;

  let carry = 0;
  while (linkedList1 || linkedList2) {
    let v1 = linkedList1 ? linkedList1.val : 0;
    let v2 = linkedList2 ? linkedList2.val : 0;

    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;

    current.next = new LinkedList(val);

    current = current.next;
    linkedList1 = linkedList1 ? linkedList1.next : null;
    linkedList2 = linkedList2 ? linkedList2.next : null;
  }

  // @Akhilesh21 help
  if (carry > 0) {
    current.next = new LinkedList(carry);
  }

  return dummy.next;
}

const input1: LinkedList = addList(2, 4, 3);
const input2: LinkedList = addList(5, 6, 4);

console.log(addTwoNumbers(input1, input2));

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
