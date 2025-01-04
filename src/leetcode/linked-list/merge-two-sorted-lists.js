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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;
  
  while (l1 && l2) {
    console.log(currentNode)

    if(l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  
  currentNode.next = l1 || l2;
  return tempNode.next;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(4);

a.next = b;
b.next = c;

const d = new ListNode(1);
const e = new ListNode(2);
const f = new ListNode(4);

d.next = e;
e.next = f;

const list1 = a,
  list2 = d;

mergeTwoLists(list1, list2);
