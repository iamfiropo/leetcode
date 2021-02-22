/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 
 Question: https://leetcode.com/problems/first-bad-version
 
 Approach: Linear Scan
 Time Complexity: O(n)
 Space Complexity: O(1)
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let count = 0;

    while (n--) {
      if (isBadVersion(count)) return count;
      count++;
    }

    return n;
  };
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 
 Approach: Binary Search
 Time Complexity: O(log n)
 Space Complexity: O(1)
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      // let mid = Math.floor(left + (right - left) / 2);
      let mid = left + Math.floor((right - left) / 2);

      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };
};
