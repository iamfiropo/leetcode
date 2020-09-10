var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let middle = Math.floor(left + (right - left) / 2);
      if (!isBadVersion(middle)) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }

    return left;
  };
};
