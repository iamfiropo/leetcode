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
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

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
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }

  return i + 1;
};
