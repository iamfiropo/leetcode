/**
 * @param {number[]} arr
 * @return {boolean}
 * 
 * Question: https://leetcode.com/problems/check-if-n-and-its-double-exist
 
 Approach: Hash Table
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var checkIfExist = function (arr) {
  let map = new Map();

  for (let char of arr) {
    let multiplier = char * 2;
    let divider = char / 2;

    if (map.has(multiplier) || map.has(divider)) return true;

    map.set(char);
  }

  return false;
};
