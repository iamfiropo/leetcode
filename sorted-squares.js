/**
 * @param {number[]} nums
 * @return {number[]}
 
 Approach: One pass
 Time complexity: O(nlogn)
 Space complexity: O(n)
 */
var sortedSquares = function (nums) {
  let squares = [];

  for (let num of nums) {
    squares.push(num ** 2);
  }

  return squares.sort((a, b) => a - b);
};
