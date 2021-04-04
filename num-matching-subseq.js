/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 
 Question: https://leetcode.com/problems/number-of-matching-subsequences
 
 Approach: Brute Force
 Time Complexity: O(words.length∗S.length+∑ i words[i].length)
 Space Complexity: O(1)
 */
var numMatchingSubseq = function (s, words) {
  let result = 0;

  for (let char of words) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < s.length && pointer2 < char.length) {
      if (s.charAt(pointer1) === char.charAt(pointer2)) ++pointer2;
      ++pointer1;
    }

    if (pointer2 === char.length) ++result;
  }

  return result;
};
