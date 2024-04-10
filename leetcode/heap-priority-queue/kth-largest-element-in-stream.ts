class MinHeap {
  public heap: number[];

  constructor() {
    this.heap = [];
  }

  #getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  #getLeftChildrenIndex(index: number): number {
    return 2 * (index + 1);
  }

  #getRightChildrenIndex(index: number): number {
    return 2 * (index + 2);
  }

  #swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  #heapifyUp(index: number): void {
    let currentIndex = index;

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.#getParentIndex(currentIndex)]) {
      const parentIndex = this.#getParentIndex(currentIndex);
      this.#swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  #heapifyDown(index: number): void {
    let currentIndex = index;

    while (true) {
      const leftChildIndex = this.#getLeftChildrenIndex(currentIndex);
      const rightChildIndex = this.#getRightChildrenIndex(currentIndex);

      let smallestIndex = currentIndex;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== currentIndex) {
        this.#swap(currentIndex, smallestIndex);
        currentIndex = smallestIndex;
      } else {
        break;
      }
    }
  }

  public peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  public push(val: number): void {
    this.heap.push(val);
    this.#heapifyUp(this.heap.length - 1);
  }

  public pop(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.#heapifyDown(0);
    return min;
  }
}

class KthLargest {
  public targetElement: number;
  public heapInstance = new MinHeap();

  constructor(k: number, nums: number[]) {
    this.targetElement = k;
    
    for (let numberItem of nums) {
      this.add(numberItem);
    }
  }

  add(val: number): number {
    this.heapInstance.push(val);

    if (this.heapInstance.heap.length > this.targetElement) {
      this.heapInstance.pop();
    }

    return this.heapInstance.peek()!;
  }
}

const instance =  new KthLargest(3, [4, 5, 8, 2]);
