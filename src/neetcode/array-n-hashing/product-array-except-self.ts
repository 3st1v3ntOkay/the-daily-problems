// ? Muy costoso de ejecutar, se podria mejorar haciendo memorizacion
function productExceptSelf(nums: number[]): number[] {
  let array: number[] = [...nums];
  let newArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let prefix: number[] = array.slice(i + 1);
    let postfix: number[] = array.slice(0, i);

    let fix: number = [...prefix, ...postfix].reduce((c, n) => c * n);

    newArray = [...newArray, fix];
  }

  return newArray;
}

// ? La mejor solucion en cuanto a la memoria
function productExceptSelfAlt1(nums: number[]): number[] {
  let prefix: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    }
    else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  let suffix: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    }
    else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

// ? La mejor solucion en cuanto a la ejecucion
function productExceptSelfAlt2(nums: number[]): number[] {
  let resultArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let productVal: number = nums[i];

    if (resultArr.length !== 0) {
      productVal = productVal * resultArr[i - 1];
    }

    resultArr.push(productVal);
  }

  let productVal: number = 1;
  let i: number = nums.length - 1;

  for (i; i > 0; i--) {
    resultArr[i] = resultArr[i - 1] * productVal;
    productVal = nums[i] * productVal;
  }

  resultArr[i] = productVal;

  return resultArr;
};

const input: number[] = [1, 2, 3, 4];

console.log(productExceptSelf(input));
console.log(productExceptSelfAlt1(input));
console.log(productExceptSelfAlt2(input));
