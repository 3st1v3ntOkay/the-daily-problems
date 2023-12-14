class Node {
  constructor(val, next, random) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.random = (random === undefined ? null : random);
  }
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
  let oldToCopy = new Map();

  let current = head;
  while (current) {
    let copy = new Node(current.val);
    oldToCopy.set(current, copy)
    current = current.next
  }

  current = head;
  while (current) {
    let copy = oldToCopy.get(current);
    copy.next = oldToCopy.get(current.next) || null;
    copy.random = oldToCopy.get(current.random) || null;
    current = current.next
  }

  console.log(oldToCopy.get(head))
  return oldToCopy.get(head)
};

const a = new Node(7);
const b = new Node(13);
const c = new Node(11);
const d = new Node(10);
const e = new Node(1);

a.next = b;
// a.random = null;

b.next = c;
b.random = 0;

c.next = d;
c.random = 4;

d.next = e;
d.random = 2;

copyRandomList(a);