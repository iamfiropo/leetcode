/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right++]);
      maxLength = Math.max(set.size, maxLength);
    } else {
      set.delete(s[left++]);
    }
  }

  return maxLength;
};
