/**
 * @param {number} n
 * @return {string[]}
 
 Question: https://leetcode.com/problems/generate-parentheses
 
 Approach: Backtracking
 Time Complexity: O((4^n)/(n^2))
 Space Complexity: O((4^n)/(n^2))
 */
var generateParenthesis = function (n) {
  /*
  Add parenthesis if open < n
  Add parenthesis if closed < open
  Valid IIF closed === open === n
  */

  let result = [];

  function backtrack(open, closed, stack) {
    // Base case
    if (n === open && n === closed) return result.push(stack);

    if (open < n) backtrack(open + 1, closed, `${stack}(`);

    if (closed < open) backtrack(open, closed + 1, `${stack})`);
  }

  backtrack(0, 0, "");
  return result;
};
