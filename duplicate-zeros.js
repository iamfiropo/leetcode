/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 
 Approach: Two pass
 Time complexity: O(n)
 Space complexity: O(1)
 */
var duplicateZeros = function (arr) {
  let possibleDuplicates = 0;
  let length = arr.length - 1;

  // Find the number of zeros to be duplicated
  for (let left = 0; left <= length - possibleDuplicates; left++) {
    if (!arr[left]) {
      // Edge case
      if (left === length - possibleDuplicates) {
        arr[length] = 0;
        length -= 1;
        break;
      }
      possibleDuplicates++;
    }
  }

  let last = length - possibleDuplicates;

  for (let i = last; i >= 0; i--) {
    if (!arr[i]) {
      arr[i + possibleDuplicates] = 0;
      possibleDuplicates--;
      arr[i + possibleDuplicates] = 0;
    } else {
      arr[i + possibleDuplicates] = arr[i];
    }
  }
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 
 Approach: One pass
 Time complexity: O(n)
 Space complexity: O(1)
 */
var duplicateZeros = function (arr) {
  let idx = 0;
  let size = arr.length;

  while (size--) {
    if (!arr[idx]) {
      arr.splice(idx + 1, 0, 0);
      arr.pop();
      ++idx;
    }
    ++idx;
  }
};
