/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Question: https://leetcode.com/problems/intersection-of-two-arrays
 *
 * Approach: Brute Force Method
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
var intersection = function (nums1, nums2) {
  let result = new Set();

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.add(nums1[i]);
      }
    }
  }

  return Array.from(result);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 Approach: Hash Set
 Time complexity: O(n + m)
 Space complexity: O(n)
 */
var intersection = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];

  let smallestArray = nums1;
  let biggestArray = nums2;
  let result = [];

  // To ensure we loop over the smallest array
  if (nums1.length > nums2.length) {
    smallestArray = nums2;
    biggestArray = nums1;
  }

  let set = new Set(biggestArray); // O(n)

  for (let num of smallestArray) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num);
    }
  }

  return result;
};
