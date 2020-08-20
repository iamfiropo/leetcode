// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 *
 * @param {*} nums
 * @param {*} k
 *
 * declare and initialize counter with 0
 * declare and initialize accumulatedSum with 0
 * declare and initialize map with empty object
 * iterate over the input array and do the ffg on each iteration:
 * add each item of the array to accumulatedSum variable
 * check if accumulatedSum is equal to the target k and increment the counter variable
 * check if accumulatedSum - k is in map object and add the value to counter
 * update map by adding the count of each prefix sum
 * return counter
 */
function subarraySum(nums, k) {
  let counter = 0;
  let accumulatedSum = 0;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    accumulatedSum += nums[i];

    if (accumulatedSum === k) {
      counter++;
    }

    if (accumulatedSum - k in map) {
      counter += map[accumulatedSum - k];
    }

    if (!map[accumulatedSum]) {
      map[accumulatedSum] = 1;
    } else {
      map[accumulatedSum] += 1;
    }
  }
  return counter;
}

console.log(subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0));

function subarraySum(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count += 1;
      }
    }
  }

  return count;
}
