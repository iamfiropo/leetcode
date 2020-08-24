// "abccdba"
//    ^^

// time: O(N)
// space: O(1)

/**
 *
 * @param {*} s
 * declare and initialize left and right pointer to 0 and right most value of the array respectively
 * iterate over the array while left is lesser than right
 * check if start item is not equal to end item and either increment the left pointer or the right pointer
 * then, check if either of the two is is not equal to right or left respectively and increment left and decrement right pointers
 * else, return true
 *
 */

const validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }

  return true;
};

const validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

console.log(validPalindrome("abccdba"));
