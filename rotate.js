/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Approach: Brute Force
 Time complexity: O(n * k). All the numbers are shifted by one step in k times
 Space complexity: O(1). No extra space is used
 */

const rotate = function (nums, k) {
  // Rotation remainder technique speed up the rotation if the value of k is greater than the length of array nums, e.g nums = [1,2,3], k = 4, it will rotate once which is the remainder
  k %= nums.length;
  let temp, previous;

  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      // swap operation
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Approach: Extra Array
 Time complexity: O(n). One pass is used to put the numbers in the new array. And another pass to copy the new array to the original one.
 Note to self: The time complexity is not O(m+n) because the nums array length is the same for both loop 
 Space complexity: O(n). Another array of same size as nums.length is used
 */

const rotate = function (nums, k) {
  const temp = [];

  for (let i = 0; i < nums.length; i++) {
    const rotationRemainder = (i + k) % nums.length;
    temp[rotationRemainder] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 
 Approach: Reversal
 Time complexity: O(n). n elements are reversed a total of three times.
 Space complexity: O(1). No extra space is used
 */

const rotate = function (nums, k) {
  const length = nums.length;

  // rotation remainder technique <I love it>
  k %= length;

  // original array nums: [1,2,3,4,5,6,7], k: 3
  // reverse the whole array : [7,6,5,4,3,2,1]
  reverse(nums, 0, length - 1);
  // reverse k times: 3times
  reverse(nums, 0, k - 1);
  // reverse n-k times: 4times
  reverse(nums, k, length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
}
