/**
 * @param {number} n
 * @return {number}
 
 Question: https://leetcode.com/problems/count-primes
 
 Approach: The save of irretostonics
 Time Complexity: O(n + m)
 Space Complexity: O(n)
 */
var countPrimes = function (n) {
  let nums = [];
  let primeCount = 0;

  for (let i = 0; i < n; i++) nums[i] = true;

  for (let i = 2; i * i < n; i++) {
    if (nums[i] === true) {
      for (let j = i; j * i < n; j++) nums[j * i] = false;
    }
  }

  for (let i = 2; i < n; i++) if (nums[i] === true) ++primeCount;

  return primeCount;
};
