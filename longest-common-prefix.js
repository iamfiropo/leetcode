/**
 * @param {string[]} strs
 * @return {string}
 
 Question: https://leetcode.com/problems/longest-common-prefix
 
 Approach: Horizontal Scanning 
 Time Complexity: O(S)
 Space Complexity: O(1)
 */
var longestCommonPrefix = function (strs) {
  let n = strs.length;

  if (strs === null || n === 0) return "";

  let prefix = strs[0];

  for (let str of strs) {
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix.length === 0) return "";
    }
  }

  return prefix;
};

/**
 * @param {string[]} strs
 * @return {string}
 
 Approach: Vertical Scanning 
 Time Complexity: O(S)
 Space Complexity: O(1)
 */
var longestCommonPrefix = function (strs) {
  let n = strs.length;
  if (strs === null || n === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0].charAt(i);

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== char)
        return strs[0].substring(0, i);
    }
  }

  return strs[0];
};
