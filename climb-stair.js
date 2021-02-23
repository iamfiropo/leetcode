/**
 * @param {number} n
 * @return {number}
 
 Question: https://leetcode.com/problems/climbing-stairs
 
 Approach: Recursion with memoization
 
 Time Complexity: O(n)
 Space Complexity: O(n)
 */

function climbStairs(n) {
  function stairs(n, cache) {
    // Edge Case
    if (n < 0) return 0;

    // Base Case
    if (n === 0) return 1;

    // check the cache for the result of previous operations
    if (cache[n]) return cache[n];

    // Recursive case
    return (cache[n] = stairs(n - 1, cache) + stairs(n - 2, cache));
  }

  return stairs(n, {});
}

var climbStairs = function (n) {
  const cache = { 0: 0, 1: 1, 2: 2 };

  function stairs(n) {
    if (n in cache) {
      return cache[n];
    } else {
      return (cache[n] = stairs(n - 1) + stairs(n - 2));
    }
  }

  stairs(n);
  return cache[n];
};

var climbStairs = function (n) {
  const stair = [0, 1, 2, 3];

  for (let i = 4; i <= n; i++) {
    stair[i] = stair[i - 1] + stair[i - 2];
  }

  return stair[n];
};
