type TListNode = ListNode | null;

class ListNode {
  public val: number;
  public next: TListNode;

  constructor(val: number, next?: TListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function reverseList(head: TListNode): TListNode {
  let stack: number[] = [];

  while (head != null) {
    stack.push(head.val);
    head = head.next;
  }

  let newList: TListNode = null;
  let headNode: TListNode = null;

  while (stack.length) {
    const node: TListNode = new ListNode(stack.pop()!);

    if (newList) {
      headNode!.next = node;
      headNode = headNode!.next;
    }
    else {
      newList = node;
      headNode = newList;
    }
  }

  return newList;
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

const head: ListNode = a;

reverseList(head);

// function ofReverseList(head: ListNode): ListNode {
//   let linkedList = [];

//   for (let value of head) {
//     // linkedList.unshift(value);
//     linkedList = [value, ...linkedList];
//   }

//   console.log(linkedList);
//   return linkedList;
// }
