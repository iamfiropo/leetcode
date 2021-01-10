/**
 * @param {string} s
 * @return {boolean}
 
 Question: https://leetcode.com/problems/valid-palindrome
 
 Approach: Two Pointers
 Time complexity: O(n)
 Space complexity: O(1)
 
 */
var isPalindrome = function (s) {
  // remove spaces without regex ===> s.split(' ').join('')
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 
 Approach: Two Pointers
 Time complexity: O(n)
 Space complexity: O(1)
 
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 
 Question: https://leetcode.com/problems/valid-palindrome
 
 Approach: Compare with Reverse
 Time complexity: O(n)
 Space complexity: O(1)
 
 */
var isPalindrome = function (s) {
  // remove spaces without regex ===> s.split(' ').join('')
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = s.split("").reverse().join("");

  return s === reversedString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
