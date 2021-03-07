/**
 * @param {number} numRows
 * @return {number[][]}
 
 Question: https://leetcode.com/problems/pascals-triangle
 
 Approach: Dynamic Programming
 Time Complexity: O(n^2)
 Time Complexity: O(n^2)
 */
var generate = function (numRows) {
  let triangle = [];

  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    prevRow = triangle[i - 1];
    newRow = [];

    newRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};
