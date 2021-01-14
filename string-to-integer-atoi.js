/**
 * @param {string} s
 * @return {number}
 
 Question: https://leetcode.com/problems/string-to-integer-atoi
 
 Approach: One Pass
 Time Complexity: O(n)
 Space Complexity: O(n)
 */
var myAtoi = function (s) {
  if (s.length === 0) return 0;

  let pow = Math.pow(2, 31);
  let sign = 1;
  let result = "";
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    // Check if optional sign exist
    if (i === 0 && (s[i] === "+" || s[i] === "-")) {
      // increment i
      sign = s[i++] === "-" ? -1 : 1;
    }

    if (sign > 0 && isDigit(s[i]) === false) break;
    if (sign < 0 && isDigit(s[i]) === false) break;

    if (isDigit(s[i])) result += s[i];
  }

  result = Number(result) * sign;

  if (result < -pow) result = pow * sign;
  if (result >= pow) result = (pow - 1) * sign;

  return result;
};

function isDigit(value) {
  return Number(value) || value === "0" ? true : false;
}
