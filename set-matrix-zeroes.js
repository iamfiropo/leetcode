/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 
 Question: https://leetcode.com/problems/set-matrix-zeroes
 
 Approach: Additional Memory Approach
 
 Time Complexity: O(m*n)
 Time Complexity: O(m+n)
 */
var setZeroes = function (matrix) {
  let R = matrix.length;
  let C = matrix[0].length;

  let rows = new Set();
  let cols = new Set();

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (rows.has(i) || cols.has(j)) matrix[i][j] = 0;
    }
  }
};
