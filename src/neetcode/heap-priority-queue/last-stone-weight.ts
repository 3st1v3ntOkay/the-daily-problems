function mylastStoneWeight(stones: number[]): number {
  if (!stones.length) return 0;
  stones.sort((a, b) => a - b);

  while (stones.length === 1) {
    let y = stones.pop()!;
    let x = stones.pop()!;

    if (x > y) {
      stones.push(y - x);
    }
  }

  return stones[0];
}

// @yakorshak
type FnProp = (a: number, b: number) => number;

class MaxHeap {
  public compareFn: FnProp;
  public heap: number[];

  constructor(compareFn: FnProp) {
    this.compareFn = compareFn;
    this.heap = new Array();
  }

  public insert(val: number) {
    this.heap.push(val);
    this.heap.sort(this.compareFn);
  }

  // I change this "public extract = () => this.heap.shift();" to:
  public extract() {
    return this.heap.shift();
  }

  // I change this "public peek = () => this.heap[0];" to:
  public peek() {
    return this.heap[0];
  }

  // I change this "public size = () => this.heap.length;" to:
  public size() {
    return this.heap.length;
  }
}

// here there is an error with the returned value
function compareFn(a: number, b: number): number | any {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a === b) return 0;
}

function lastStoneWeight(stones: number[]) {
  let heap = new MaxHeap(compareFn);

  for (let i = 0; i < stones.length; i++) {
    heap.insert(stones[i]);
  }

  while (heap.size() > 1) {
    let first = heap.peek();
    heap.extract();

    let second = heap.peek();
    heap.extract();

    if (first === second) {
      continue;
    }
    else {
      let left = first - second;
      heap.insert(left);
    }
  }

  return heap.peek() ? heap.peek() : 0;
}

const stones = [2, 7, 4, 1, 8, 1];

console.log(lastStoneWeight(stones));
