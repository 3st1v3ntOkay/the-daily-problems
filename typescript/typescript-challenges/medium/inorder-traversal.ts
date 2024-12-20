interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type myInorderTraversal<T extends TreeNode | null> =
  T extends null
  ? []
  : {
    [key in keyof T as T[key] extends null
    ? never
    : key
    ]: T[key] extends TreeNode
    ? never
    : never
  }

  // @Sun79
type InorderTraversal<
  T extends TreeNode | null,
  NT extends TreeNode = NonNullable<T>
> =
  T extends null
  ? []
  : [
    ...InorderTraversal<NT['left']>,
    NT['val'],
    ...InorderTraversal<NT['right']>
  ]

import type { Equal, Expect } from '@type-challenges/utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]