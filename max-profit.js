/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 
  Approach: Simple One Pass
  Time Complexity: O(n)
  Space Complexity: O(1)
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};
