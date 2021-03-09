/**
 * @param {number[]} nums
 * @return {number}
 
 Question: https://leetcode.com/problems/missing-number
 
 Approach: Hash Table
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var missingNumber = function (nums) {
  let map = {};

  for (let num of nums) map[num] = true;

  for (let i = 0; i <= nums.length; i++) {
    if (!(i in map)) return i;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: Gauss Formula
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var missingNumber = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = 0;

  for (let num of nums) actualSum += num;

  return expectedSum - actualSum;
};
