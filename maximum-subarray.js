/**
 * @param {number[]} nums
 * @return {number}
 
 Question: https://leetcode.com/problems/maximum-subarray
 
 Approach: Greedy: Make the locally optimal choice at each stage
 
 Time Complexity: O(n)
 Space Complexity: O(1)
 */

var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];

  let currentSum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: Dynamic Programming (Kadane's algorithm)
 
 Time Complexity: O(n)
 Space Complexity: O(1)
 */

var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];

  let maxSum = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];

    maxSum = Math.max(maxSum, nums[i]);
  }

  return maxSum;
};
