/**
 * @param {number[]} nums
 * @return {number[]}
 */

// ? Muy costoso de ejecutar, se podria mejorar haciendo memorizacion
const productExceptSelf1 = function (nums) {
  let array = [...nums];
  let newArray = [];

  for (let i = 0; i < nums.length; i++) {
    let prefix = array.slice(i + 1);
    let postfix = array.slice(0, i);
    let fix = [...prefix, ...postfix].reduce((c, n) => c * n);

    newArray = [...newArray, fix];
  }

  return newArray;
};

// ? La mejor solucion en cuanto a la memoria
const productExceptSelf2 = function (nums) {
  let prefix = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  let suffix = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

// ? La mejor solucion en cuanto a la ejecucion
const productExceptSelf3 = function (nums) {
  let resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    let productVal = nums[i];

    if (resultArr.length !== 0) {
      productVal = productVal * resultArr[i - 1];
    }
    resultArr.push(productVal);
  }

  let productVal = 1;
  let i = nums.length - 1;

  for (i; i > 0; i--) {
    resultArr[i] = resultArr[i - 1] * productVal;
    productVal = nums[i] * productVal;
  }
  resultArr[i] = productVal;

  return resultArr;
};

productExceptSelf1([1, 2, 3, 4]);
productExceptSelf2([1, 2, 3, 4]);
productExceptSelf3([1, 2, 3, 4]);
