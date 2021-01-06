/**
 * @param {number[]} digits
 * @return {number[]}
 * 
 Question: https://leetcode.com/problems/plus-one
 
 Approach: Schoolbook Addition with Carry
 Time complexity: O(n)
 Space complexity: O(n)
 */
var plusOne = function (digits) {
  let left = 0;
  let right = digits.length - 1;

  while (left <= right) {
    rightToLeftIndex = right - left;

    if (digits[rightToLeftIndex] === 9) {
      digits[rightToLeftIndex] = 0;
    } else {
      digits[rightToLeftIndex]++;
      return digits;
    }

    left++;
  }

  return [1, ...digits];
};

/**
 * @param {number[]} digits
 * @return {number[]}
 
 Approach: Schoolbook Addition with Carry
 Time complexity: O(n)
 Space complexity: O(n)
 */
var plusOne = function (digits) {
  for (let i = 0; i < digits.length; i++) {
    rightToLeftIndex = digits.length - 1 - i;

    if (digits[rightToLeftIndex] === 9) {
      digits[rightToLeftIndex] = 0;
    } else {
      digits[rightToLeftIndex]++;
      return digits;
    }
  }

  return [1, ...digits];
};

/**
 * @param {number[]} digits
 * @return {number[]}
 Approach: Schoolbook Addition with Carry
 Time complexity: O(n)
 Space complexity: O(n)

 
1. create a variable carry and initialize it with 1
2. iterate over the digits loop from front to back
3. create a variable and assign the addition of carry to every item of the array 
4. reset carry to 0
5. check if the sum in step 3 is more than 9, then strip off 10 from the value and reset carry to 1
6. assign each sum to digits array in-place
7. return [1, ...digits] if carry is true for all the array input values
*/
function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    sum = digits[i] + carry;
    carry = 0;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
      digits[i] = sum;
    } else {
      digits[i]++;
      return digits;
    }
  }

  return [1, ...digits];
}

/**
 * @param {number[]} digits
 * @return {number[]}
 
 Approach: Schoolbook Addition with Carry
 Time complexity: O(n)
 Space complexity: O(n)
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  return [1, ...digits];
};
