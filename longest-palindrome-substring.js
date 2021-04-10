/**
 * @param {string} s
 * @return {string}
 
 Question: https://leetcode.com/problems/longest-palindromic-substring
 
 Approach: Dynamic Programming
 Time Complexity: O(n^2)
 Space Complexity: O(n^2)
 */

var longestPalindrome = function (s) {
  if (s === null || s.length < 1) return "";

  let max = "";

  for (let i = 0; i < s.length; i++) {
    let left = expandAroundCenter(s, i, i);
    let right = expandAroundCenter(s, i, i + 1);

    let currMax = left.length >= right.length ? left : right;
    max = currMax.length > max.length ? currMax : max;
  }

  return max;
};

function expandAroundCenter(s, left, right) {
  let curr = "";

  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    curr = s.substring(left, right + 1);
    left--;
    right++;
  }

  return curr;
}
