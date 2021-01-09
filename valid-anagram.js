/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 
 Approach: Sorting
 Time complexity: O(nlogn)
 Space complexity: O(1)
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 Approach: Sorting
 Time complexity: O(n)
 Space complexity: O(1)
 * 
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = charMap(s);
  const tMap = charMap(t);

  for (let char of Object.keys(sMap)) {
    if (sMap[char] !== tMap[char]) {
      return false;
    }
  }

  return true;
};

const charMap = (str) => {
  const map = {};

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
};
