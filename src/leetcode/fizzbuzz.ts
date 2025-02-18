function fizzBuzz(n: number): string[] {
  let output: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      output.push("Fizz");
    }
    else if (i % 5 === 0) {
      output.push("Buzz");
    }
    else {
      output.push(`${i}`);
    }
  }

  console.time();
  console.log(output);
  console.timeEnd();

  return output;
}

// @nguyenthengocit37
function fizzBuzzAlt(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "Fizz";
    }

    if (i % 5 === 0) {
      str += "Buzz";
    }

    result.push(str || `${i}`);
  }

  console.time();
  console.log(result);
  console.timeEnd();

  return result;
}

const input: number = 15000000;

fizzBuzz(input);
fizzBuzzAlt(input);
