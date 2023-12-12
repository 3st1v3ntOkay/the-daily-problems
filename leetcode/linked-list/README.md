# My travel through linked list challenges

- Ways to create a linked list:

```bash
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
```

- Declare linked list:

```bash
  const a = new ListNode(1);
  const b = new ListNode(2);
  const c = new ListNode(4);

  a.next = b;
  b.next = c;
  c.next = a; // a way to make a loop
```

## Reverse Linked List

> [!NOTE]
> [Challenge](https://leetcode.com/problems/reverse-linked-list/)

**Help:**

- [@JangirSumit](https://leetcode.com/problems/reverse-linked-list/solutions/4346121/simple-solution-using-stack/)

## Merge Two Sorted Lists

> [!NOTE]
> [Challenge](https://leetcode.com/problems/merge-two-sorted-lists/)

**Help:**

- [@ikboljonme](https://leetcode.com/problems/merge-two-sorted-lists/solutions/3353373/javascript-easy-explanation-100-for-loop/)

## Linked List Cycle

> [!NOTE]
> [Challenge](https://leetcode.com/problems/linked-list-cycle/)

**Help:**

- NA
