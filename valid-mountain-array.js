/**
 * @param {number[]} arr
 * @return {boolean}
 
 Question: https://leetcode.com/problems/valid-mountain-array
 
 Approach: One Pass
 Time complexity: O(n). Although there are two loops, but the loops iterate exactly at the length    of array input
 Space Complexity: O(1)
 */
var validMountainArray = function (arr) {
  let count = 0;

  // walk up the mountain
  while (count < arr.length && arr[count] < arr[count + 1]) ++count;

  // count can't be the first or the last element of the array
  if (count === 0 || count === arr.length - 1) return false;

  // walk down the mountain
  while (count < arr.length && arr[count] > arr[count + 1]) ++count;

  return count === arr.length - 1;
};
