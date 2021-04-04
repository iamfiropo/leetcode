/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 
 Question: https://leetcode.com/problems/is-subsequence
 
 Approach: Two Pointers
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;

  let sPointer = 0;
  let tPointer = 0;
  let sLength = s.length;
  let tLength = t.length;

  while (tPointer < tLength && sPointer < sLength) {
    if (s.charAt(sPointer) === t.charAt(tPointer)) ++sPointer;
    ++tPointer;
  }

  return sPointer === sLength;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 
 Approach: Two Pointers
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;

  let sPointer = 0;
  let tPointer = 0;
  let sLength = s.length;
  let tLength = t.length;

  while (tPointer < tLength && sPointer < sLength) {
    while (s.charAt(sPointer) !== t.charAt(tPointer)) {
      tPointer++;

      // Edge case for when there is no subsequence and t has reached the end of its string
      if (tPointer === tLength) return false;
    }

    sPointer++;
    tPointer++;
  }

  return sPointer === sLength;
};
