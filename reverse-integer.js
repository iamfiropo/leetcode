/**
 * @param {number} x
 * @return {number}
 
 Questions: https://leetcode.com/problems/reverse-integer/submissions
 
 Approach: Inbuilt reverse array method
 Time complexity: O(n)
 Space complexity: O(1)
 */
var reverse = function (x) {
  const integerRange = Math.pow(2, 31);
  const reversedInteger = parseInt(x.toString().split("").reverse().join(""));
  const result = reversedInteger * Math.sign(x);
  return reversedInteger > integerRange ? 0 : result;
};

/**
 * @param {number} x
 * @return {number}
 
 Approach: Loop
 Time complexity: O(n)
 Space complexity: O(1)
 */

var reverse = function (x) {
  const limit = Math.pow(2, 31);
  let reversed = x.toString().split("");
  let result = "";

  for (let i = reversed.length - 1; i >= 0; i--) {
    result += reversed[i];
  }

  return parseInt(result) > limit ? 0 : parseInt(result) * Math.sign(x);
};

/**
 * @param {number} x
 * @return {number}
 
 Approach: Swap
 Time complexity: O(n)
 Space complexity: O(1)
 */
var reverse = function (x) {
  const splittedX = x.toString().split("");

  let left = 0,
    right = splittedX.length - 1;
  const limit = Math.pow(2, 31);

  while (left < right) {
    temp = splittedX[left];
    splittedX[left++] = splittedX[right];
    splittedX[right--] = temp;
  }

  const result = parseInt(splittedX.join(""));
  return result > limit ? 0 : result * Math.sign(x);
};
