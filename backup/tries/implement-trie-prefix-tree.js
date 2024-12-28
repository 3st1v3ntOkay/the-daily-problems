import { TrieNode } from "./data/trie";

// its name comes from re"trie"val
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /** 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let current = this.root;

    for (let c of word) {
      if (current[c] == null) {
        current[c] = new TrieNode();
      }

      current = current[c];
    }

    current.endOfWord = true;
  }

  /**
   * 
   * @param {string} word 
   * @returns {void}
   */
  #traverse(word) {
    let current = this.root;

    for (let c of word) {
      current = current[c];
      
      if (current == null) {
        return null;
      }
    }

    return current;
  }

  /** 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.#traverse(word);
    return node != null && node.endOfWord === true;
  }

  /** 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.#traverse(prefix) != null;
  }
}

const test = new Trie();
