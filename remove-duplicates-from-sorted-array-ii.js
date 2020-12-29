/**
 * @param {number[]} nums
 * @return {number}
 *
 * Question: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Approach: Two Pointers
 * Time complexity: O(n). Assume that n is the length of array. Each of i and j(i+1) traverses at most n steps
 * Space complexity: O(1). No extra space used
 */

const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
