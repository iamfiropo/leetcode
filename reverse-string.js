//https://leetcode.com/problems/reverse-string/
var reverseString = function (s) {
  // validate the input
  // create a string variable str
  // do an O(n/2) iteration on the string input
  // keep the reference to each item of the input from the first index to the mid-index in the temporary variable created in step 2
  // swap each item of the input from the last index to the mid-index in a descending order with the item of the first index to the mid index in an ascending order and vice-versa

  if (s.length === 0 || s === undefined || s === null || !Array.isArray(s)) {
    return false;
  }

  let temporaryStr = "";

  for (let i = 0; i < s.length / 2; i++) {
    temporaryStr = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temporaryStr;
  }
};
