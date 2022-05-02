/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 *  Question: https://leetcode.com/problems/sort-array-by-parity

 Approach: In-place
 Time complexity: O(n)
 Space complexity: O(1)
 */
 var sortArrayByParity = function(nums) {
  let length = nums.length;
  let slowPointer = 0
  let fastPointer = 0;
  
  while (length--) {
    if (nums[fastPointer] % 2 === 0) {
      temp = nums[fastPointer];
      nums[fastPointer] = nums[slowPointer];
      nums[slowPointer++] = temp;
    }
      
     ++fastPointer;
  }
  
  return nums
};