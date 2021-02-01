/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 
 Question: https://leetcode.com/problems/rotate-string
 
 Approach: Simple Check
 Time Complexity: O(n^2)
 Space Complexity: O(n)
 */
var rotateString = function (A, B) {
  return A.length === B.length && (A + A).includes(B);
};
