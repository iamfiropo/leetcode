// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*
1. create a variable carry and initialize it with 1
2. iterate over the digits loop from front to back
3. create a variable and assign the addition of carry to every item of the array 
4. reset carry to 0
5. check if the sum in step 3 is more than 9, then strip off 10 from the value and reset carry to 1
6. assign each sum to digits array item iteratively
7. conditionally return [1, ...digits] if carry is true else, return digits array


*/
function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    carry = 0;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
    }

    digits[i] = sum;
  }

  return carry ? [1, ...digits] : digits;
}
