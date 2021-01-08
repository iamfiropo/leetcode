/**
 *
 * @param {*} nums
 * @param {*} target
 *
 * Question: https://leetcode.com/problems/two-sum
 * 
 Approach: One-pass Hash Table
 Time complexity: O(n)
 Space complexity: O(n)
 *
 * create an empty map object
 * Iterate over the nums array and in the loop, find the difference of the target from each array item
 * check if difference is in the map object and return the index of the difference and the current index in the loop
 * else, assign each index to each item in map object
 *
 */
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}

twoSum([2, 11, 7, 15], 9);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 Approach: One-pass Hash Table
 Time complexity: O(n)
 Space complexity: O(n)
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 Approach: Two-pass Hash Table
 Time complexity: O(n)
 Space complexity: O(n)
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
};
