export class TrieNode {
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
