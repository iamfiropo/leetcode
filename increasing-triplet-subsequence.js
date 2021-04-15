/**
 * @param {number[]} nums
 * @return {boolean}
 
 Question: https://leetcode.com/problems/increasing-triplet-subsequence
 
 Approach: Linear Scan
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var increasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;

  for (let num of nums) {
    if (num <= firstNumber) {
      firstNumber = num;
    } else if (num <= secondNumber) {
      secondNumber = num;
    } else {
      return true;
    }
  }

  return false;
};
