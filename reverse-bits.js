/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 
 Question: https://leetcode.com/problems/reverse-bits
 
 Approach: Approach 1: Bit by Bit
 Time Complexity: O(1)
 Space Complexity: O(1)
 */
var reverseBits = function (n) {
  let result = 0;
  let power = 32;

  while (power--) {
    result = (result << 1) + (n & 1);
    n >>>= 1;
  }

  return result >>> 0;
};
