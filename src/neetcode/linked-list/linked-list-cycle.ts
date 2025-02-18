class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number, next?: ListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function hasCycle(head: ListNode): boolean {
  let slow: ListNode = head;
  let fast: ListNode = head;

  while (fast && fast.next) {
    // solve null error
    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      console.log('tru');
      return true;
    }
  }

  console.log('false');
  return false;
}

// where do I use this???
const posA: number = 1;
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(4);

a.next = b;
b.next = c;
c.next = a;

// hasCycle(a, posA);
hasCycle(a);

// where do I use this???
const posD: number = 0;
const d = new ListNode(1);
const e = new ListNode(2);

d.next = e;
e.next = d;

// hasCycle(d, posD);
hasCycle(d);

// where do I use this???
const posF: number = -1;
const f = new ListNode(1);

// hasCycle(f, posF);
hasCycle(f);