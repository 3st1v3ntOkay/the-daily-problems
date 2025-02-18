interface TRootNode {
  value: number;
  left: TRootNode | null;
  right: TRootNode | null;
}

let levels: number[][] = [];

function Traverse(node: TRootNode, depth = 0) {
  if (!levels[depth]) {
    levels[depth] = [];
  }

  levels[depth].push(node.value);

  if (node.left) {
    Traverse(node.left, depth + 1);
  }

  if (node.right) {
    Traverse(node.right, depth + 1);
  }
}

interface TQueue {
  node: TRootNode;
  depth: number;
}

function TraverseAlt1(node: TRootNode) {
  let queue: TQueue[] = [];
  queue.push({ node, depth: 0 });

  let lastDepth: number = 0;
  let output: string = "";

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    if (depth > lastDepth) {
      output += "\n";
      lastDepth = depth;
    }

    output += node.value + " ";

    if (node.left) {
      queue.push({
        node: node.left,
        depth: depth + 1,
      });
    }

    if (node.right) {
      queue.push({
        node: node.right,
        depth: depth + 1,
      });
    }
  }

  console.log(output);
}

const rootNode: TRootNode = {
  value: 1,
  left: {
    value: 3,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
}

Traverse(rootNode);
TraverseAlt1(rootNode);
