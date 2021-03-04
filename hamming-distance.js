/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 
 Question: https://leetcode.com/problems/hamming-distance
 
 Approach: Loop
 Time Complexity: O(log n)
 Space Complexity: O(1)
 */
var hammingDistance = function (x, y) {
  let count = 0;

  while (x || y) {
    x = x / 2;
    y = y / 2;

    if ((x % 1) - (y % 1) !== 0) ++count;

    // round the real number to whole number
    x = parseInt(x);
    y = parseInt(y);
  }

  return count;
};
