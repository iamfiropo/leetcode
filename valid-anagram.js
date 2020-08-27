/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sString = charMap(s);
  const tString = charMap(t);

  for (let char of Object.keys(sString)) {
    if (sString[char] !== tString[char]) {
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
