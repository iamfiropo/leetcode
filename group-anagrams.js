/**
 * @param {string[]} strs
 * @return {string[][]}
 
 Question: https://leetcode.com/problems/group-anagrams
 
 Approach: Categorize by Sorted String
 Time Complexity: O(N K log K)
 Space Complexity: O(NK)
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];

  let charMap = new Map();

  for (let char of strs) {
    temp = char;
    sortedChar = char.split("").sort().join("");
    if (charMap.has(sortedChar)) {
      current = charMap.get(sortedChar);
      current.push(temp);
      charMap.set(sortedChar, current);
    } else {
      charMap.set(sortedChar, [temp]);
    }
  }
  return Array.from(charMap.values());
};
