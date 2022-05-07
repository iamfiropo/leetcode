/**
 * @param {number[]} nums
 * @return {number}
 * 
 Question: https://leetcode.com/problems/max-consecutive-ones-ii
 
 Approach: Sliding Window
 
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
 var findMaxConsecutiveOnes = function(nums) {
  let left = 0;
  let right = 0;
  let zeroes = 0;
  let maxConsecutive = 0;
  
  let n = nums.length;
  
  while (right < n) {
    // count the numer of zeroes in the current window
    if (nums[right] === 0) ++zeroes;
    
    // contract the sliding window for as long as the number of zeroes is 2
    while (zeroes === 2) {
      // decrease the number of zero counter when the left pointer is zero
      if (nums[left] === 0) --zeroes
      
      // move to the next index
      ++left;
    }
    
    // updation formular
    currentWindowUpdate = right - left + 1;
    
    // update the maximum consecutive 1's in the current window
    maxConsecutive = Math.max(maxConsecutive, currentWindowUpdate)
    
    // expand the sliding window
    ++right;
  }
  
  return maxConsecutive
};