/**
 * @param {number} x
 * @return {boolean}
 
 Question: https://leetcode.com/problems/palindrome-number
 
 Approach: Reversal
 Time complexity: O(n)
 Space complexity: O(1)
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  return x === reversedInteger(x);
};

var reversedInteger = function (x) {
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reversed;
};
