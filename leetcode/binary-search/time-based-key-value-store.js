// @JSDocs ES 2015 classes: https://jsdoc.app/howto-es2015-classes
// @stackoverflow: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc

class myTimeMap {
  #data = new Map();

  constructor() {}

  /**
   * constructor.
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   *
   * @returns {void}
   */
  set(key, value, timestamp) {
    let timeStamps = this.#data.get(key);

    const timeStamp = { value: value, time: timestamp };

    if (!timeStamps) {
      timeStamps = [timeStamp];
      this.#data.set(key, timeStamps);
    } else {
      timeStamps.push(timeStamp);
    }
  }

  /**
   * constructor.
   * @param {string} key
   * @param {number} timestamp
   *
   * @returns {void}
   */
  get(key, timestamp) {
    const timeStamps = this.#data.get(key);

    if (!timeStamps) return "";
    return this.#binarySearchForTimeStamp(timestamp, timeStamps);
  }

  #binarySearchForTimeStamp(timestamp, timestamps) {
    let left = 0;
    let right = timestamps.length - 1;
    let middle = Math.floor((left + right) / 2);
    let closest = null;

    while (left <= right) {
      if (timestamps[middle].time === timestamp) {
        return timestamps[middle].value;
      } else if (timestamps[middle].time < timestamp) {
        closest = middle;
        left = middle + 1;
      } else {
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
