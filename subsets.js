/**
 * @param {number[]} nums
 * @return {number[][]}
 
 Question: https://leetcode.com/problems/subsets
 
 Approach: Backtracking
 
 Time Complexity: O(n * 2^n)
 Space Complexity: O(n * 2^n)
 */
var subsets = function (nums) {
  let result = [],
    current = [];

  function backtrack(nums, current, index) {
    result.push([...current]);

    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);

      backtrack(nums, current, i + 1);

      current.pop();
    }
  }

  backtrack(nums, current, 0);
  return result;
};
