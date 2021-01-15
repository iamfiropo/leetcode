/**
 * @param {character[][]} board
 * @return {boolean}
 
 Question: https://leetcode.com/problems/valid-sudoku
 
 Approach: One Iteration
 Time Complexity: O(1)
 Space Complexity: O(1)
 */
var isValidSudoku = function (board) {
  const rows = {};
  const columns = {};
  const boxes = {};

  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    columns[i] = {};
    boxes[i] = {};
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num === ".") continue;
      const parsedNum = Number(num);
      const boxesIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      rows[i][parsedNum] = rows[i][parsedNum] ? rows[i][parsedNum] + 1 : 1;
      columns[j][parsedNum] = columns[j][parsedNum]
        ? columns[j][parsedNum] + 1
        : 1;
      boxes[boxesIdx][parsedNum] = boxes[boxesIdx][parsedNum]
        ? boxes[boxesIdx][parsedNum] + 1
        : 1;

      if (
        rows[i][parsedNum] > 1 ||
        columns[j][parsedNum] > 1 ||
        boxes[boxesIdx][parsedNum] > 1
      )
        return false;
    }
  }

  return true;
};
