type TNode = Node | null;

class Node {
  public key: number;
  public val: number;

  public next: TNode;
  public prev: TNode;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;

    this.next = null;
    this.prev = null;
  }
}

// @neetcode
class LRUCache {
  public capacity: number;
  public cache: Map<any, any>;

  public left: TNode;
  public right: TNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    this.left = new Node(0, 0);
    this.right = new Node(0, 0);

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  public get(key: number): number {
    if (this.cache.has(key)) {
      // nice tip from @EduAir
      const node = this.cache.get(key);

      this.remove(node);
      this.insert(node);

      return node.val;
    }

    return -1;
  }

  public insert(node: TNode): void {
    const prev = this.right!.prev; // check null error
    const nxt = this.right;

    // check null error
    prev!.next = node;
    nxt!.prev = node;

    // check null error
    node!.next = nxt;
    node!.prev = prev;
  }

  public put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key))
    }

    const node = new Node(key, value);
    this.insert(node);
    this.cache.set(key, node);

    if (this.cache.size > this.capacity) {
      const lru = this.left!.next;

      this.cache.delete(lru!.key);
      this.remove(lru);
    }
  }

  public remove(node: TNode): void {
    // check null error
    const prev = node!.prev;
    const nxt = node!.next;

    // check null error
    prev!.next = nxt;
    nxt!.prev = prev;
  }
}

const lRUCache = new LRUCache(2);

lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4