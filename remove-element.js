/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * Question: https://leetcode.com/problems/remove-element
 * 
 The solution is the most efficient among other ones in this file because it's less expensive

 Approach: In-place <Two Pointers>
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var removeElement = function(nums, val) {
  let n = nums.length;
  let idx = 0;
  
  while (idx < n) {
    if (nums[idx] === val) {
      nums[idx] = nums[n-1];
      --n;
    } else {
      ++idx
    }
  }
  
  return n;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 
 Approach: In-place <Two Pointers>
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var removeElement = function(nums, val) {
  let n = nums.length;
  let slowPointer = 0;
  let fastPointer = 0;
  
  while (n--) {
    if (nums[fastPointer] !== val) {
      swap(nums, slowPointer, fastPointer)
      ++slowPointer;
    }
    
    ++fastPointer;
  }
  
  return slowPointer;
};

var swap = function(nums, slowPointer, fastPointer) {
  let temp = nums[slowPointer];
  nums[slowPointer] = nums[fastPointer];
  nums[fastPointer] = temp;
  
  return nums;
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 
 Approach: In-place
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
