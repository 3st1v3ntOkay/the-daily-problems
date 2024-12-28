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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null,
    current = slow.next;

  while (current) {
    let tmp = current.next
    current.next = prev
    prev = current
    current = tmp
  }

  slow.next = null

  let h1 = head,
    h2 = prev;

  while (h2) {
    let tmp = h1.next;

    h1.next = h2;
    h1 = h2;
    h2 = tmp;
  }

  console.log(head)
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

reorderList(a);