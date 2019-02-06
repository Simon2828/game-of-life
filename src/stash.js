function gameOfLifeIterator(board) {
    let returnBoard = [];
  
    for (let i = 0; i < board.length; i++) {
      returnBoard[i] = [];
  
      for (let j = 0; j < board[i].length; j++) {
        let neighborCount = getCellNeighborCount(i, j, board);
  
        if (board[i][j] === 1) {
          if (neighborCount > 1 && neighborCount < 4) {
            returnBoard[i][j] = 1;
          } else {
            returnBoard[i][j] = 0;
          }
        } else {
          returnBoard[i][j] = (neighborCount === 3) ? 1 : 0;
        }
      }
    }
  
    return returnBoard;
  
    function getCellNeighborCount(x, y, board) {
      let neighborCount = 0;
  
      if (board[x - 1] !== undefined) {
        if (board[x - 1][y - 1] === 1) {
          neighborCount++;
        }
        if (board[x - 1][y] === 1) {
          neighborCount++;
        }
        if (board[x - 1][y + 1] === 1) {
          neighborCount++;
        }
      }
  
      if (board[x] !== undefined) {
        if (board[x][y - 1] === 1) {
          neighborCount++;
        }
        if (board[x][y + 1] === 1) {
          neighborCount++;
        }
      }
  
      if (board[x + 1] !== undefined) {
        if (board[x + 1][y - 1] === 1) {
          neighborCount++;
        }
        if (board[x + 1][y] === 1) {
          neighborCount++;
        }
        if (board[x + 1][y + 1] === 1) {
          neighborCount++;
        }
      }
  
      return neighborCount;
    }
  }