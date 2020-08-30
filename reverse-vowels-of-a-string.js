/**
 * @param {string} s
 * @return {string}
 
 two pointer approach
 create and initialize left and right pointer that point to the beginning and the end of the string items
 iterate over the string
 inside the iteration, iterate from the left pointer till found vowel
 inside the iteration, iterate from the right pointer till found vowel
 swap them and continue
 */
var reverseVowels = function(s) {
  let left = 0;
  let right = s.length - 1;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  s = s.split("");
  
  while (left < right) {
      while (!vowels.includes(s[left]) && left < right) {
          left++
      }
      
      while (!vowels.includes(s[right]) && left < right) {
          right--
      }
      
      swapVowels(s, left, right)
      
      left++
      right--
  }
  
  return s.join("")
};

function swapVowels(s, left, right) {
  const temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  
  return s
}