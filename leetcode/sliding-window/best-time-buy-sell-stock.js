/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit1 = function (prices) {
  let left = 0,
    right = 1;
  let profit = 0;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right += 1;
  }

  console.log(maxProfit);
  return maxProfit;
};

// @SardorbekBahramov: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4251707/accepted-92-6-javascript-ts-easy-solution/
/**
 * @param {number[]} prices
 * @returns {number}
 */
const maxProfit2 = function (prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  console.log(maxProfit);
  return maxProfit;
};

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

maxProfit1(prices1);
maxProfit2(prices2);
