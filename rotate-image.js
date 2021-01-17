/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 
Question: https://leetcode.com/problems/rotate-image

Approach: Matrix Transpose and Row Reversal
Time Complexity: O(n^2)
Space Complexity: O(1)
              
    [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
    1 2 3
    4 5 6
    7 8 9

    [[1, 4, 7],[2, 5, 8],[3, 6, 9]] - matrix transposition
    1 4 7
    2 5 8
    3 6 9

    [[7, 4, 1],[8, 5, 2],[9, 6, 3]] - reversal of each of the transposed matrix row
    7 4 1
    8 5 2
    9 6 3
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // transpose the matrix input
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // row to column swap
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  /*
      Shorter equivalence of the below loop
      for (let i = 0; i < n; i++) {
          matrix[i].reverse();
      }
  */
  // reverse each of the transposed matrix row
  for (let i = 0; i < n; i++) {
    // swap to the mid length of the matrix column
    for (let j = 0; j < n / 2; j++) {
      // row reversal swap using two pointers
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
};
