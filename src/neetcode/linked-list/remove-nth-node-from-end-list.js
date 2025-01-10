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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  let 
    dummy = new ListNode(0, head),
    left = dummy,
    right = head;

  while (n > 0 && right) {
    right = right.next;
    n -= 1;
  }


  while (right) {
    left = left.next;
    right = right.next;
  }

  // here is an error I don't know why but just in vscode
  left.next = left.next.next;
  return dummy.next;
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

removeNthFromEnd(a);