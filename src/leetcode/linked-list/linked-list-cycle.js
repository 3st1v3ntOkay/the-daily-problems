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
 * @return {boolean}
 */
const hasCycle = function(head) {
  let slow = head,
  fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      console.log('tru');
      return true;
    }
  }

  console.log('false');
  return false;
};

const posA = 1;
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(4);

a.next = b;
b.next = c;
c.next = a;

hasCycle(a, posA);

const posD = 0;
const d = new ListNode(1);
const e = new ListNode(2);

d.next = e;
e.next = d;

hasCycle(d, posD);

const posF = -1;
const f = new ListNode(1);

hasCycle(f, posF);