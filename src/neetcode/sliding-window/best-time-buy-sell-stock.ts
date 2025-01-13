function maxProfit1(prices: number[]): number {
  let left: number = 0;
  let right: number = 1;

  let profit: number = 0;
  let maxProfit: number = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    }
    else {
      left = right;
    }

    right += 1;
  }

  console.log(maxProfit);
  return maxProfit;
};

// @SardorbekBahramov: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4251707/accepted-92-6-javascript-ts-easy-solution/
function maxProfit2(prices: number[]): number {
  let maxProfit: number = 0;
  let minPrice: number = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  console.log(maxProfit);
  return maxProfit;
};

const prices1: number[] = [7, 1, 5, 3, 6, 4];
const prices2: number[] = [7, 6, 4, 3, 1];

maxProfit1(prices1);
maxProfit2(prices2);
