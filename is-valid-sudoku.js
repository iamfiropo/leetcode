/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
      let seenRow = {};
      let seenCol = {};
      for (let j = 0; j < 9; j++) {
          if (board[i][j] !== '.' && seenRow[board[i][j]]) return false;
          if (board[j][i] !== '.' && seenCol[board[j][i]]) return false;
          seenRow[board[i][j]] = true;
          seenCol[board[j][i]] = true;
          
          if (i % 3 === 0 && j % 3 === 0) {
              let seenBox = {};
              for (let m = i; m < i + 3; m++) {
                  for (let n = j; n < j + 3; n++) {
                      if (board[m][n] !== '.' && seenBox[board[m][n]]) return false;
                      seenBox[board[m][n]] = true;
                  }
              }
          }
      }
  }
  
  return true;
};