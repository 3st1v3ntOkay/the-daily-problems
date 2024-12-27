/**
 * 
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let stack = [];

  while (head != null) {
    stack.push(head.val);
    head = head.next;
  }

  let newList = null;
  let headNode = null;

  while (stack.length) {
    let node = new ListNode(stack.pop());

    if (newList) {
      headNode.next = node;
      headNode = headNode.next;
    } else {
      newList = node;
      headNode = newList;
    }
  }
  
  return newList;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const head = a;

reverseList(head);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const ofReverseList = function(head) {
  let linkedList = [];
  for (let value of head) {
    // linkedList.unshift(value);
    linkedList = [value, ...linkedList];
  }

  console.log(linkedList);
  return linkedList;
};
