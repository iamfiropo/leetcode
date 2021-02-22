/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 
 Question: https://leetcode.com/problems/merge-sorted-array
 
 Approach: Sorting
 
 Time Complexity: O((n + m)log(n + m))
 Space Complexity: O(n)
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 
 Approach: Three Pointers (Start From the Beginning)
 
 Time Complexity: O(n + m)
 Space Complexity: O(m)
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  // make a copy of the first m elements of nums1
  let nums1Copy = [];

  for (let i = 0; i < m; i++) {
    nums1Copy.push(nums1[i]);
  }

  // Read pointers for nums1Copy and nums2 respectively
  let p1 = 0;
  let p2 = 0;

  // Compare elements from nums1Copy and nums2 and write the smallest to nums1
  for (let i = 0; i < m + n; i++) {
    // Check that p1 and p2 are not over the boundaries of there respective arrays
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1++];
    } else {
      nums1[i] = nums2[p2++];
    }
  }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Approach: Three Pointers (Start from the end)
 * Time complexity: O(n + m)
 * Space complexity: O(1)
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;
  let length = m + n;

  while (length) {
    if (n === 0) break;
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[--length] = nums1[m - 1];
      --m;
    } else {
      nums1[--length] = nums2[n - 1];
      --n;
    }
  }

  return nums1;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 
 Approach: Three Pointers (Start from the end)
 
 Time Complexity: O(n + m)
 Space Complexity: O(1)
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let size = m + n;
  while (size--) {
    // Edge Case
    if (n === 0) return nums1;

    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[size] = nums1[m - 1];
      --m;
    } else {
      nums1[size] = nums2[n - 1];
      --n;
    }
  }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Question: https://leetcode.com/problems/merge-sorted-array/
 *
 * Approach: Three Pointers (Start from the end)
 * Time complexity: O(n + m)
 * Space complexity: O(1)
 * 
 *   declare a variable to sum the total length of the two array
  create a variable to hold the last item of the first number array nums1
  create a variable to hold the last item of the second number array nums2
  iterate over the two arrays simultaneously
  compare the items of the given arrays, using the total length variable
     in step 1 as the condition of the loop
  break out of the loop when the length of n is lesser than 0 i.e the exit
      door of the loop
 */
var merge = function (nums1, m, nums2, n) {
  let length = m + n;
  let nums1Item = nums1[--m];
  let nums2Item = nums2[--n];

  while (length) {
    if (n < 0) {
      break;
    } else if (nums1Item > nums2Item) {
      nums1[--length] = nums1Item;
      nums1Item = nums1[--m];
    } else {
      nums1[--length] = nums2Item;
      nums2Item = nums2[--n];
    }
  }

  return nums1;
};

merge([3, 4, 31, 0, 0, 0], [4, 6, 30]);
