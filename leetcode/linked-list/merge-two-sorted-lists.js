// This is a way to make a linked list on javascript according to me
class ListNodeClass {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function ListNodeFunc(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  // @ikboljonme: https://leetcode.com/problems/merge-two-sorted-lists/solutions/3353373/javascript-easy-explanation-100-for-loop/

  let tempNode = new ListNodeClass(0, null);
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
  
  console.log(tempNode.next)
  return tempNode.next;
};

// I discovered that this is a way to create a linked list, I made the mistake to put it as it works like a array xD
const list1 =
    new ListNodeClass(1, new ListNodeClass(2, new ListNodeClass(4))),
  list2 = 
    new ListNodeClass(1, new ListNodeClass(3, new ListNodeClass(4)));

mergeTwoLists(list1, list2);
