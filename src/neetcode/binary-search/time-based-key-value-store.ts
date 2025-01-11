// @JSDocs ES 2015 classes: https://jsdoc.app/howto-es2015-classes
// @stackoverflow: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc

// @adampjl: https://leetcode.com/problems/time-based-key-value-store/solutions/4022762/typescript-map-of-pairs-bfs/
interface TimeStamp {
  value: string;
  time: number;
}

class myTimeMap {
  #data = new Map<string, TimeStamp[]>();

  constructor() { }

  set(
    key: string,
    value: string,
    timestamp: number,
  ): void {
    let timeStamps = this.#data.get(key);
    console.log(timeStamps);

    const timeStamp: TimeStamp = {
      value: value,
      time: timestamp,
    }
    console.log(timeStamp);

    if (!timeStamps) {
      // timeStamps = [timeStamp];
      this.#data.set(key, [timeStamp]);
    }
    else {
      timeStamps.push(timeStamp);
    }
  }

  get(key: string, timestamp: number): string {
    const timeStamps = this.#data.get(key);

    if (!timeStamps) {
      return "";
    }

    return this.#binarySearchForTimeStamp(timestamp, timeStamps);
  }

  #binarySearchForTimeStamp(
    timestamp: number,
    timestamps: TimeStamp[]
  ): string {
    let left: number = 0;
    let right: number = timestamps.length - 1;

    let middle: number = Math.floor((left + right) / 2);
    let closest: null | number = null;

    while (left <= right) {
      if (timestamps[middle].time === timestamp) {
        return timestamps[middle].value;
      }
      else if (timestamps[middle].time < timestamp) {
        closest = middle;
        left = middle + 1;
      }
      else {
        right = middle - 1;
      }

      middle = Math.floor((left + right) / 2);
    }

    return closest === null ? "" : timestamps[closest].value;
  }
}

const first = new myTimeMap();

first.set("1", "value", 12);
first.get("1", 14);
first.get("1", 12);
first.set("2", "value", 453);
first.get("2", 54);
first.get("key", 65);
