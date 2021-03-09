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

/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: One pass
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var missingNumber = function (nums) {
  let expectedSum = nums.length;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Add all the indices of the array to the length of the array
    expectedSum += i;
    // Add the actual value of the array
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
};
