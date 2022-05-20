/**
 * @param {number[]} nums
 * @return {number[]} 
 * 
 * Question: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

 Approach: Hash Map - (Set)
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
 var findDisappearedNumbers = function(nums) {
  const set = new Set();
  const res = [];
  const n = nums.length;
  
  for (let num of nums) set.add(num);
  
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) res.push(i)
  }
  
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]} 
 * 

 Approach: In Place
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
 var findDisappearedNumbers = function(nums) {
  const res = [];
  
  for (let i = 0; i < nums.length; i++) {
    newIdx = Math.abs(nums[i]) - 1;
    nums[newIdx] = Math.abs(nums[newIdx]) * -1;
  }
  
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) res.push(i)
  }
  
  return res;
};