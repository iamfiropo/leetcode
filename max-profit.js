/**
 * @param {number[]} prices
 * @return {number}
 
 Question: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 
 Approach: One Pass
 
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }

  return maxProfit;
};
