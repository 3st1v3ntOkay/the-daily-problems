type TListNode = ListNode | null;

class ListNode {
  public val: number;
  public next: TListNode;

  constructor(val: number, next?: TListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function reorderList(head: ListNode): void {
  let slow: ListNode = head;
  let fast: ListNode = head;

  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  let prev: TListNode = null;
  let current: TListNode = slow.next;

  while (current) {
    let tmp: TListNode = current.next;

    current.next = prev;
    prev = current;
    current = tmp;
  }

  slow.next = null;

  let h1: TListNode = head;
  let h2: TListNode = prev;

  while (h2) {
    let tmp: TListNode = h1.next;

    h1.next = h2;
    h1 = h2;
    h2 = tmp;
  }

  console.log(head);
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

reorderList(a);