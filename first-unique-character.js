/**
 * @param {string} s
 * @return {number}
 * 
 * Question: https://leetcode.com/problems/first-unique-character-in-a-string
 
 Approach: Built in String method
 Time complexity: O(n)
 Space complexity: O(1)
 */
const firstUniqChar = function (s) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 
  Approach: Linear time solution
  Time complexity: O(n)
  Space complexity: O(1)
 */

const firstUniqChar = function (s) {
  let map = {};
  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)] === 1) {
      return i;
    }
  }

  return -1;
};

/**
 * @param {string} s
 * @return {number}
 
  Just trying to get use to Map Class usage
 Approach: Linear time solution
 Time complexity: O(n)
 Space complexity: O(1)
 */
const firstUniqChar = function (s) {
  if (s.length == 0) return -1;
  let map = new Map();
  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
