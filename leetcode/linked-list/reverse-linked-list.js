class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  // https://leetcode.com/problems/reverse-linked-list/solutions/4346121/simple-solution-using-stack/
  let stack = [];

  while (head != null) {
    stack.push(head.val);
    head = head.next;
  }

  let newList = null;
  let headNode = null;

  while (stack.length) {
    let node = new ListNode(stack.pop());

    if (newList) {
      headNode.next = node;
      headNode = headNode.next;
    } else {
      newList = node;
      headNode = newList;
    }
  }
  
  console.log(newList);
  return newList;
};



const head = new ListNode(
    1, new ListNode(
      2, new ListNode(
        3, new ListNode(
          4, new ListNode(
            5
          )
        )
      )
    )
  );

reverseList(head)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const ofReverseList = function(head) {
  let linkedList = [];
  for (let value of head) {
    // linkedList.unshift(value);
    linkedList = [value, ...linkedList];
  }

  console.log(linkedList);
  return linkedList;
};
