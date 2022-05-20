/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Question: https://leetcode.com/problems/squares-of-a-sorted-array
 
 Approach: One pass
 Time complexity: O(nlogn)
 Space complexity: O(n)
 */
var sortedSquares = function (nums) {
  let squares = [];

  for (let num of nums) squares.push(num ** 2);

  return squares.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 

 Approach: Two Pointers
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
 var sortedSquares = function(nums) {
  let n = nums.length;
  const res = [];
  let left = 0;
  let right = n - 1;
  
  while (n--) {
    let square;
    
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
        square = nums[right--];
    } else {
        square = nums[left++]
    }

    res[n] = square * square;
  }

  return res;
};
