class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// @neetcode
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  remove(node) {
    const prev = node.prev,
      nxt = node.next;

    prev.next = nxt;
    nxt.prev = prev;
  }

  insert(node) {
    const prev = this.right.prev,
      nxt = this.right;

    prev.next = node;
    nxt.prev = node;

    node.next = nxt;
    node.prev = prev;
  }

  get(key) {
    if (this.cache.has(key)) {
      // nice tip from @EduAir
      const node = this.cache.get(key);

      this.remove(node);
      this.insert(node);

      return node.val;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key))
    }

    const node = new Node(key, value);
    this.insert(node);
    this.cache.set(key, node);

    if (this.cache.size > this.capacity) {
      const lru = this.left.next;
      
      this.cache.delete(lru.key);
      this.remove(lru);
    }
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