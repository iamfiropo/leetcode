/**
 * @param {string} s
 * @return {boolean}
 
 Question: https://leetcode.com/problems/valid-parentheses
 
 Approach: Stack
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var isValid = function (s) {
  if (s.length === 1) return false;

  const map = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  const stack = [];

  for (let char of s) {
    if (map[char]) stack.push(char);
    else {
      let leftParentheses = stack.pop();

      if (map[leftParentheses] !== char) return false;
    }
  }

  return stack.length === 0;
};
