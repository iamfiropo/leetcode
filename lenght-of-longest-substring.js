/**
 * @param {string} s
 * @return {number}
 
 Question: https://leetcode.com/problems/longest-substring-without-repeating-characters
 
 Approach: Sliding Window
 Time Complexity: O(n)
 Space Complexity: O(min(m,n))
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let start = 0;
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (map.has(char)) {
      const idx = map.get(char);
      if (start <= idx) {
        start = idx + 1;
      }
    }

    len = Math.max(len, i - start + 1);
    map.set(char, i);
  }

  return len;
};
