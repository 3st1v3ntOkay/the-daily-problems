// https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/

class HashTable {
  public table: Array<[string, number]>;
  public size: number;

  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  #hash(key: string): number {
    let hash: number = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }

  set(key: string, value: number): void {
    const index: number = this.#hash(key);

    this.table[index] = [key, value];
    this.size++;
  }

  get(key: string): [string, number] {
    const index: number = this.#hash(key);

    return this.table[index];
  }

  remove(key: string): boolean {
    const index: number = this.#hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined!; // revisar bug
      this.size--;

      return true;
    }
    else {
      return false;
    }
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);

// Continuar leyendo apartir de: How to Handle Index Collision

/*********************************************************/

function HashBasedSearch(size: unknown, C: unknown): void {
  let H
}

const test = [1, 2, 3, 4];

HashBasedSearch(0, test);
