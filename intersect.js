/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * Questions: https://leetcode.com/problems/intersection-of-two-arrays-ii
 
 Approach: Brute force <An optimize one though>
 Time complexity: O(min(nm))
 Space complexity: O(n)
 */
const intersect = function (nums1, nums2) {
  let smallest = nums1;
  let largest = nums2;

  if (nums1.length > nums2.length) {
    smallest = nums2;
    largest = nums1;
  }

  let result = [];

  for (let i = 0; i < smallest.length; i++) {
    for (let j = 0; j < largest.length; j++) {
      if (largest[j] === smallest[i]) {
        result.push(smallest[i]);
        largest.splice(j, 1);
        break;
      }
    }
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 Approach: Hash Map
 Time complexity: O(n + m)
 Space complexity: O(min(n + m))
 */
const intersect = function (nums1, nums2) {
  let smallest = nums1;
  let largest = nums2;

  if (nums1.length > nums2.length) {
    smallest = nums2;
    largest = nums1;
  }

  let hashMap = new Map();

  for (let num of smallest) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  let result = [];

  for (let num of largest) {
    if (hashMap.has(num)) {
      result.push(num);

      const mapItemCount = hashMap.get(num);
      if (mapItemCount === 1) {
        hashMap.delete(num);
      } else {
        hashMap.set(num, hashMap.get(num) - 1);
      }
    }
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 Approach: Hash Map
 Time complexity: O(n + m)
 Space complexity: O(min(n + m))
 */
const intersect = function (nums1, nums2) {
  let smallest = nums1;
  let largest = nums2;

  if (nums1.length > nums2.length) {
    smallest = nums2;
    largest = nums1;
  }

  let hashMap = new Map();

  for (let num of smallest) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  let k = 0;

  for (let num of largest) {
    if (hashMap.has(num)) {
      smallest[k++] = num;

      const mapItemCount = hashMap.get(num);
      if (mapItemCount === 1) {
        hashMap.delete(num);
      } else {
        hashMap.set(num, hashMap.get(num) - 1);
      }
    }
  }

  return smallest.slice(0, k);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 Approach: Hash Map
 Time complexity: O(n + m)
 Space complexity: O(min(n + m))
 */
const intersect = function (nums1, nums2) {
  let smallest = nums1;
  let largest = nums2;

  if (nums1.length > nums2.length) {
    smallest = nums2;
    largest = nums1;
  }

  let hashMap = {};

  for (let num of smallest) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num]++;
    }
  }

  let k = 0;

  for (let num of largest) {
    if (num in hashMap) {
      // technique to avoid creating an empty array to store the result => smallest[k++]
      smallest[k++] = num;

      if (hashMap[num] === 1) {
        delete hashMap[num];
      } else {
        hashMap[num]--;
      }
    }
  }

  return smallest.slice(0, k);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 Approach: Hash Map
 Time complexity: O(nlogn + mlogm)
 Space complexity: O(n + m)
 */
const intersect = function (nums1, nums2) {
  let smallest = nums1;
  let largest = nums2;

  // To ensure the smallest size array appears first in the loop
  if (nums1.length > nums2.length) {
    smallest = nums2;
    largest = nums1;
  }

  smallest.sort((a, b) => a - b);
  largest.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    k = 0;

  while (i < smallest.length && j < largest.length) {
    if (smallest[i] < largest[j]) {
      ++i;
    } else if (smallest[i] > largest[j]) {
      ++j;
    } else {
      // technique to avoid creating an empty array to store the result => smallest[k++]
      smallest[k++] = smallest[i];
      ++i;
      ++j;
    }
  }

  return smallest.slice(0, k);
};
