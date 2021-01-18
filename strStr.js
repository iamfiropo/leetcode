/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 
 Question: https://leetcode.com/problems/implement-strstr
 
 Approach: Linear Time Window Slice
 Time Complexity: O((m-n)n)
 Space Complexity: O(1)
 */
var strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;

  if (n === 0) return 0;
  if (n > m) return -1;

  // i <= m - n is an optimization condition
  for (let i = 0; i <= m - n; i++) {
    if (haystack.substring(i, n + i) === needle) return i;
  }

  return -1;
};
