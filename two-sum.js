// https://leetcode.com/problems/two-sum/

/**
 *
 * @param {*} nums
 * @param {*} target
 * create an empty map object
 * Iterate over the nums array and in the loop, find the difference of the target from each array item
 * check if difference is in the map object and return the index of the difference and the current index in the loop
 * else, assign each index to each item in map object
 *
 */
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (difference in map) {
      return [map[difference], i];
    }
    map[nums[i]] = i;
  }
}

twoSum([2, 11, 7, 15], 9);
