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

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 
 Question: https://leetcode.com/problems/implement-strstr
 
 Approach: Two Pointers: Linear Time Window Slice
 Time Complexity: O((m-n)n)
 Space Complexity: O(1)
 */
var strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;
  let pm = 0;

  if (n === 0) return 0;
  if (n > m) return -1;

  while (pm <= m - n) {
    // find the position of the first needle's character in haystack
    while (pm <= m - n && haystack.charAt(pm) !== needle.charAt(0)) ++pm;

    let currentLength = 0,
      pn = 0;

    // compute the max match string
    while (pn < n && pm < m && haystack.charAt(pm) === needle.charAt(pn)) {
      ++pm;
      ++pn;
      ++currentLength;
    }

    // if needle length is found, return the starting position
    if (currentLength === n) return pm - n;

    // backtracking
    pm = pm - currentLength + 1;
  }

  return -1;
};
