// import { TrieNode } from "../_data/Trie"

class TrieNode {
  public root: Map<string, TrieNode>;
  public endOfWord: boolean;

  constructor() {
    this.root = new Map<string, TrieNode>();
    this.endOfWord = false;
  }

  setEnd(): void {
    this.endOfWord = true;
  }
}

/*
  TODO:
  - check if 2 maps using ===, gives you true
  - que es mas acertado, escribir el nombre de la funcion con mayusculas o minusculas (dfs o DFS)
*/

class WordDictionary {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  public addWord(word: string): void {
    let current: TrieNode = this.root;

    for (let char of word) {
      if (!current.root.has(char)) {
        current.root.set(char, new TrieNode());
      }

      // check undefined error
      current = current.root.get(char)!;
    }

    // current.endOfWord = true;
    current.setEnd();
  }

  public search(word: string): boolean {
    function DFS(
      charCount: number,
      node: TrieNode,
    ): boolean {
      let current: TrieNode = node;

      for (let i = charCount; i < word.length; i++) {
        let char: string = word[i];

        if (char === ".") {
          for (let [_key, value] of current.root) {
            if (DFS(i + 1, value)) {
              return true;
            }
          }

          return false;
        } else {
          if (!current.root.has(char)) {
            return false;
          }

          // check undefined error
          current = current.root.get(char)!;
        }
      }

      return current.endOfWord;
    }

    return DFS(0, this.root);
  }
}

const test = new WordDictionary();
