/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 
 Question: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 
 Approach: Hash Table
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var twoSum = function (numbers, target) {
  let map = {};

  for (let i = 0; i < numbers.length; i++) {
    complement = target - numbers[i];

    if (complement in map) {
      return [map[complement] + 1, i + 1];
    }

    map[numbers[i]] = i;
  }
};
