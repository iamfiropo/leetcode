/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Question: https://leetcode.com/problems/contains-duplicate
 *
 * Approach: Naive Linear Search(Brute Force)
 * Time Complexity: O(n^2)
 * Space Complexity: O(1). We only used constant extra space
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Approach: Naive(Brute Force)
 * Time Complexity: O(n^2)
 * Space Complexity: O(1). We only used constant extra space
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Approach: Hash Table. Utilize a dynamic data structure that supports fast search and insert operations
 * Note to self: when n is not sufficiently large, an O(n) algorithm can be slower than an O(nlogn) algorithm because of hashtable overhead(collision) in maintaining its property
 * Time Complexity: O(n)
 * Space complexity: O(n).
 */
var containsDuplicate = function (nums) {
  const contains = {};

  for (let value of nums) {
    console.log({ value });
    if (value in contains) {
      return true;
    } else {
      contains[value] = nums[value];
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Approach: Hash Table. Utilize a dynamic data structure that supports fast search and insert operations
 * Time Complexity: O(n)
 * Space complexity: O(n).
 */
var containsDuplicate = function (nums) {
  const contains = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in contains) {
      return true;
    } else {
      contains[nums[i]] = nums[i];
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Approach: Sorting. If there are any duplicate integers, they will be consecutive after sorting
 * Time Complexity: O(nlogn)
 * Space complexity: O(1).
 */
var containsDuplicate = function (nums) {
  // In general, it is not a good practice to modify the input unless it is clear to the caller that
  // the input will be modified. One may make a copy of nums and operate on the copy instead
  // that's why i didn't call the sort method directly like this: nums.sort((a,b) => a - b)
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      return true;
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Approach: Hash Table. Utilize a dynamic data structure that supports fast search and insert operations
 * Time Complexity: O(n)
 * Space complexity: O(n).
 */
