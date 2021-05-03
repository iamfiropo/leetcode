/**
 * @param {number[]} nums
 * @return {number[][]}
 
 Question: https://leetcode.com/problems/permutations
 
 Approach: Backtracking
 Time Complexity: O(n!)
 Space Complexity: O(n!)
 */
var permute = function (nums) {
  let result = [];

  function backtrack(nums, temp) {
    if (nums.length === 0) result.push(temp);

    for (let i = 0; i < nums.length; i++) {
      newTemp = nums.slice(0);
      newTemp.splice(i, 1);

      backtrack(newTemp, temp.concat(nums[i]));
    }
  }

  backtrack(nums, []);
  return result;
};
