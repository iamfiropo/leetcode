/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Question: https://leetcode.com/problems/move-zeroes/solution/

 Approach: Space Sub-Optimal
 Time complexity: O(n)
 Space complexity: O(n)
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  let result = [];
  let numZeroes = 0;
  let count = 0;

  // Count the zeroes and make all the non-zero elements retain their original order
  for (let num of nums) {
    // numZeroes += (num === 0) || equivalent to ===> || if (num === 0) numZeroes++
    if (num === 0) {
      numZeroes++;
    } else {
      result.push(num);
    }
  }

  // Push the 0's to the front of the array
  while (numZeroes--) {
    result.push(0);
  }

  while (n--) {
    nums[count] = result[count++];
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Approach: Space Optimal, Operation Sub-Optimal
 Time complexity: O(n)
 Space complexity: O(1)
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[nonZeroIndex++] = num;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Approach: Optimal <Two Pointers>
 Time complexity: O(n)
 Space complexity: O(1)
 */
var moveZeroes = function (nums) {
  for (let current = 0, nonZeroIndex = 0; current < nums.length; current++) {
    if (nums[current] != 0) {
      // swap all the non-zero numbers to the left side of the array maintaining there positions
      temp = nums[current];
      nums[current] = nums[nonZeroIndex];
      nums[nonZeroIndex++] = temp;
    }
  }
};
