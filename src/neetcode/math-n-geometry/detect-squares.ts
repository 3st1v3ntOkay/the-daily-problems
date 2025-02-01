import { LogTests } from "@/utils/log-tests";

// @me, this was my try
class myDetectSquares {
  public data: number[][] = [];

  constructor() {
    this.data = [];
  }

  add(point: number[]): void {
    this.data.push(point);
  }

  count(point: number[]): number {
    let findX: boolean = false;
    let findY: boolean = false;

    // for loop for x + for loop for y
    for (const [x, y] of this.data) {
      if (x === point[0]) {
        findX = true;
      }

      if (y === point[1]) {
        findY = true;
      }
    }

    if (findX === true && findY === true) {
      // return numberOfSquares =+ 1 and recursive call
      return 1;
    }

    return 0;
  }
}

// @neetcode
class DetectSquares {
  #pointsCount: Map<string, number> = new Map();
  #points: number[][] = [];

  constructor() {
    this.#pointsCount = new Map();
    this.#points = [];
  }

  public add(point: number[]): void {
    const pnt: string = point.join(",");
    console.log(pnt);

    this.#pointsCount.set(pnt, (this.#pointsCount.get(pnt) ?? 0) + 1);
    this.#points.push(point);
  }

  public count(point: number[]): number {
    let result: number = 0;
    let [pointX, pointY] = point;

    for (const [x, y] of this.#points) {
      if (
        Math.abs(pointY - y) !== Math.abs(pointX - x)
        || x === pointX
        || y === pointY
      ) {
        continue;
      }

      result +=
        (this.#pointsCount.get(`${x},${pointY}`) ?? 0) *
        (this.#pointsCount.get(`${pointX},${y}`) ?? 0);
    }

    return result;
  }
}

// test zone
const detectSquares: DetectSquares = new DetectSquares();

detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);

const test1: number = detectSquares.count([11, 10]);
const test2: number = detectSquares.count([14, 8]);

detectSquares.add([11, 2]);

const test3: number = detectSquares.count([11, 10]);

const tests: number[] = [
  test1,
  test2,
  test3,
];

LogTests(tests);