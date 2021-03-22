/**
 * @param {string} digits
 * @return {string[]}
 
 Question: https://leetcode.com/problems/letter-combinations-of-a-phone-number
 
 Approach: Backtracking
 
 Time Complexity: O((4^N).N)
 Space Complexity: O(N)
 */
var letterCombinations = function (digits) {
  let result = [];
  let digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits) backtrack(0, "", digits, digitMap, result);
  return result;
};

var backtrack = function (idx, path, digits, digitMap, result) {
  if (path.length === digits.length) return result.push(path);

  for (let char of digitMap[digits[idx]]) {
    backtrack(idx + 1, path + char, digits, digitMap, result);
  }
};
