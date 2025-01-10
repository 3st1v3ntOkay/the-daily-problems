export class LinkedList {
  public val: any;
  public next: LinkedList | null;

  constructor(
    val?: any,
    next?: LinkedList | null,
  ) {
    this.val = val;
    this.next = next ?? null;
  }
}

export function addList(...args: number[]): any {
  if (args.length === 0) {
    return;
  }

  let value = args.shift();
  return new LinkedList(value, addList(...args));
}

/*

  export function addList(...args: number[]): any {
    if (args.length === 0) {
      return;
    }

    // let size = args.length;
    let value = args.shift();

    // return new LinkedList(value, addList(...args), size);
    return new LinkedList(value, addList(...args));
  }

  export function showListValues(list: LinkedList): number[] {
    let newArray: number[] = [];
    let currList: LinkedList = list;

    for (let index = 0; index < list.size; index++) {
      newArray.push(currList.val);
      currList = currList.next;
    }

    return newArray;
  }
*/