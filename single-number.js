/**
 * @param {number[]} nums
 * @return {number}
 
 Question: https://leetcode.com/problems/single-number
 
 Approach: List operation
 Time complexity: O(n^2)
 Space complexity: O(n)
 */
const singleNumber = function (nums) {
  const result = [];

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    // O(n) - the include search
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    } else {
      const index = result.indexOf(nums[i]);
      result.splice(index, 1);
    }
  }

  return result[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: Hash Table
 Time complexity: O(n)
 Space complexity: O(n)
 */
const singleNumber = function (nums) {
  const hashTable = {};

  for (let value of nums) {
    if (!(value in hashTable)) {
      hashTable[value] = 1;
    } else {
      hashTable[value]++;
    }
  }

  for (let value of Object.entries(hashTable)) {
    if (value[1] === 1) {
      return value[0];
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: Math - 2 ∗ (a + b + c) − (a + a + b + b + c) = c
 Math formular abstraction: for each a, b, c = a || b || c must be unique while other are not.
 Time complexity: O(n)
 Space complexity: O(n)
 */
const singleNumber = function (nums) {
  const set = new Set();
  let sumOfSet = 0,
    sumOfNums = 0;

  for (let num of nums) {
    sumOfNums += num;
    if (!set.has(num)) {
      set.add(num);
      sumOfSet += num;
    }
  }

  return 2 * sumOfSet - sumOfNums;
};

/**
 * @param {number[]} nums
 * @return {number}
 
 Approach: Bit Manipulation - XOR GATE 
 Time complexity: O(n)
 Space complexity: O(1)
 */
const singleNumber = function (nums) {
  let result = 0;

  for (let num of nums) {
    result = result ^ num;
  }

  return result;
};
