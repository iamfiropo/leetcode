/**
 * @param {number[]} nums
 * @return {number}
 * 
 Question: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 
 * Approach: One Pass
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
var findNumbers = function (nums) {
  let count = 0;

  for (let num of nums) {
    if (num.toString().length % 2 === 0) {
      count++;
    }
  }

  return count;
};
