/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: One pass 
 Time complexity: O(n)
 Space complexity: O(1)
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;

  for (let num of nums) {
    if (num === 1) {
      ++count;
      if (count > max) max = count;
    } else {
      count = 0;
    }
  }

  return max;
};
