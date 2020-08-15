// https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let carry = 0;
  let aArray = a.length - 1;
  let bArray = b.length - 1;
  let result = [];

  while (aArray >= 0 || bArray >= 0) {
    let firstArray = a[aArray] ? Number(a[aArray]) : 0;
    let secondArray = b[bArray] ? Number(b[bArray]) : 0;
    let sum = firstArray + secondArray + carry;
    carry = 0;

    if (sum >= 2) {
      sum -= 2;
      carry = 1;
    }

    aArray--;
    bArray--;

    result.unshift(sum);
  }

  if (carry) {
    result.unshift(carry);
  }

  return result.join("");
}
