type TListNode = ListNode | null;

class ListNode {
  public val: number;
  public next: TListNode;

  constructor(val: number, next?: TListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function removeNthFromEnd(
  head: ListNode,
  n: number,
): ListNode {
  const dummy: ListNode = new ListNode(0, head);

  let left: ListNode = dummy;
  let right: ListNode = head;

  while (n > 0 && right) {
    // check null error
    right = right.next!;
    n -= 1;
  }


  while (right) {
    // check null error
    left = left.next!;
    right = right.next!;
  }

  // check null error
  left.next = left.next!.next;
  return dummy.next!;
}

const a: ListNode = new ListNode(1);
const b: ListNode = new ListNode(2);
const c: ListNode = new ListNode(3);
const d: ListNode = new ListNode(4);
const e: ListNode = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const input: number = 2;

removeNthFromEnd(a, input);
