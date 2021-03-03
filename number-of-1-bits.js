/**
 * @param {number} n - a positive integer
 * @return {number}
 
 Question: https://leetcode.com/problems/number-of-1-bits
 
 Approach: Loop and flip
 Time Complexity: O(1)
 Space Complexity: O(1)
 */
var hammingWeight = function (n) {
  let bits = 0;
  let mask = 1;

  for (let i = 0; i < 32; i++) {
    if ((n & mask) !== 0) bits++;
    mask <<= 1;
  }

  return bits;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 
 Approach: Bit Manipulation
 Time Complexity: O(1)
 Space Complexity: O(1)
 */
var hammingWeight = function (n) {
  let sum = 0;

  while (n !== 0) {
    ++sum;
    n &= n - 1;
  }

  return sum;
};
