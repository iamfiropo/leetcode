/**
 * @param {number} n
 * @return {string}
 * 
 * Question: https://leetcode.com/problems/count-and-say
 * Approach: 
 * Time complexity: O(2^n) - Exponential Time
 * Space complexity: O(2^(n - 1)) - Exponential Time
 
 Note to self: To get the next role, say the count and the character of the current role
    countAndSay(1): 1 == say One 1
    countAndSay(2): 11 == say Two 1
    countAndSay(3): 21 == say One 2, One 1
    countAndSay(4): 1211 == say One 1, One 2, Two 1
    countAndSay(5): 111221 == say Three 1, Two 2, One 1
    countAndSay(6): 312211 == say One 3, One 1, Two 2, Two 1 for the next role, which is 13112221
 */
var countAndSay = function (n) {
  let result = "1";

  if (n === 1) {
    return result;
  }

  let character = 0;
  let count = 0;
  let inProgress = "";

  while (n-- > 1) {
    while (count < result.length) {
      // the max count of each digit string
      while (result.charAt(character) === result.charAt(count)) count++;
      // append digit string count to inProgress string
      inProgress += (count - character).toString();

      // append digit string character to inProgress string
      inProgress += result.charAt(character);
      character = count;
    }

    result = inProgress;

    // Default the variables for the next operation
    inProgress = "";
    character = 0;
    count = 0;
  }

  return result;
};
