class Trie{
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }

  setEnd() {
    this.endOfWord = true;
  }
}

/*
  TODO:
  - check if 2 maps using ===, gives you true
  - que es mas acertado, escribir el nombre de la funcion con mayusculas o minusculas (dfs o DFS)
*/

class WordDictionary {
  constructor() {
    this.root = new Trie();
  }

  /**
   * @param {string} word 
   * @returns {void}
  */
  addWord(word) {
    let current = this.root;
    
    for (let char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new Trie());
      }

      current = current.children.get(char);
    }

    // current.endOfWord = true;
    current.setEnd();
  }

  /**
   * @param {string} word 
   * @returns {boolean}
  */
  search(word) {
    /**
     * 
     * @param {number} charCount 
     * @param {Node} node 
     * @returns {boolean}
     */
    function DFS(charCount, node) {
      let current = node;

      for (let i = charCount; i < word.length; i++) {
        let char = word[i];

        if (char === ".") {
          for (let [_, value] of current.children) {
            if (DFS(i + 1, value)) {
              return true;
            }
          }
          
          return false;
        } else {
          if (!current.children.has(char)) {
            return false;
          }

          current = current.children.get(char);
        }
      }

      return current.endOfWord;
    }

    return DFS(0, this.root);
  }
}

const test = new WordDictionary();
