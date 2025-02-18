type TListNode = ListNode | null;

class ListNode {
  public val: number;
  public next: TListNode;

  constructor(val: number, next?: TListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeTwoLists(
  l1: TListNode,
  l2: TListNode,
): TListNode {
  let tempNode: ListNode = new ListNode(0);
  let currentNode: ListNode = tempNode;

  while (l1 && l2) {
    console.log(currentNode)

    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    }
    else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }

  currentNode.next = l1 || l2;
  return tempNode.next;
};

const a: ListNode = new ListNode(1);
const b: ListNode = new ListNode(2);
const c: ListNode = new ListNode(4);

a.next = b;
b.next = c;

const d: ListNode = new ListNode(1);
const e: ListNode = new ListNode(2);
const f: ListNode = new ListNode(4);

d.next = e;
e.next = f;

const list1: ListNode = a;
const list2: ListNode = d;

mergeTwoLists(list1, list2);
