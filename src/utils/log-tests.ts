export function LogTests<T>(tests: T[]): void {
  for (const test of tests) {
    console.log(test);
  }
}
