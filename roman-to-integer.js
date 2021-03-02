/**
 * @param {string} s
 * @return {number}
 
 Question: https://leetcode.com/problems/roman-to-integer
 
 Approach: Hash Table + Right to left pass
 
 Time Complexity: O(1)
 Space Complexity: O(1)
 */
var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (map[s[i - 1]] < map[s[i]]) {
      result += map[s[i]];
      result -= map[s[i - 1]];
      --i;
    } else {
      result += map[s[i]];
    }
  }

  return result;
};
