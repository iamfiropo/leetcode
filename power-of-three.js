/**
 * @param {number} n
 * @return {boolean}
 
 Question: https://leetcode.com/problems/power-of-three
 
 Approach: Loop Iteration
 
 Time Complexity: O(log n (3))
 Space Complexity: O(1)
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false;

  while (n % 3 === 0) n /= 3;

  return n === 1;
};
