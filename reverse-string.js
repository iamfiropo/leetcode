var reverseString = function (s) {
  /*
    Question: //https://leetcode.com/problems/reverse-string
    Approach: Two Pointers 
    Time complexity: O(n)
    Space complexity: O(1)

    validate the input
    create a string variable str
    do an O(n/2) iteration on the string input
    keep the reference to each item of the input from the first index to the mid-index in the temporary variable created in step 2
    swap each item of the input from the last index to the mid-index in a descending order with the item of the first index to the mid index in an ascending order and vice-versa
  */

  if (s.length === 0 || s === undefined || s === null || !Array.isArray(s)) {
    return false;
  }

  for (let i = 0; i < s.length / 2; i++) {
    //swap
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
};

var reverseString = function (s) {
  /*
    Question: //https://leetcode.com/problems/reverse-string
    Approach: In-built array reverse method
    Time complexity: O(n)
    Space complexity: O(1)

  */

  s.reverse();
};

var reverseString = function (s) {
  /*
    Question: //https://leetcode.com/problems/reverse-string
    Approach: Recursion, In-Place
    Time complexity: O(n)
    Space complexity: O(n)

  */

  swapRecursion(s, 0, s.length - 1);
};

function swapRecursion(array, left, right) {
  // Base case of the recursion
  if (left >= right) return;

  const temp = array[left];
  array[left++] = array[right];
  array[right--] = temp;

  swapRecursion(array, left, right);
}

var reverseString = function (s) {
  /*
    Question: //https://leetcode.com/problems/reverse-string
    Approach: Two Pointers, Iteration
    Time complexity: O(n)
    Space complexity: O(1)
  */

  if (s.length === 0 || s === undefined || s === null || !Array.isArray(s)) {
    return false;
  }

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    //swap
    temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }
};
