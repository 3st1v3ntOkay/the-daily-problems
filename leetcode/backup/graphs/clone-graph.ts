class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val === undefined ? 0 : val);
    this.neighbors = (neighbors === undefined ? [] : neighbors);
  }
}

// @NeetCoe + @SigmaSum
function cloneGraph(node: _Node | null): _Node | null {
  let oldToNew = new Map<_Node, _Node>();

  if (node === null) {
    return node;
  }

  function dfs(node: _Node) {
    if (oldToNew.has(node)) {
      return oldToNew.get(node); // [key, value]
    }

    let copy = new _Node(node.val);
    oldToNew.set(node, copy);

    for (let neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor)!);
    }

    return copy;
  }

  return dfs(node)!;
}
