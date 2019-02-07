class Api {
  createSeedGrid() {
    let grid = new Array(50);

    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(50);
      for (let j = 0; j < grid.length; j++) {
        grid[i][j] = Math.random() >= 0.75;
      }
    }
    return grid;
  }

  findAliveNeighbours(i, j, grid, row) {
    let aliveNeighboursTotal = 0;
    // current row
    if (row[j - 1]) {
      aliveNeighboursTotal++;
    }
    if (row[j + 1]) {
      aliveNeighboursTotal++;
    }
    // row above
    if (grid[i - 1] !== undefined) {
      if (grid[i - 1][j - 1]) {
        aliveNeighboursTotal++;
      }
      if (grid[i - 1][j]) {
        aliveNeighboursTotal++;
      }
      if (grid[i - 1][j + 1]) {
        aliveNeighboursTotal++;
      }
    }
    // row below
    if (grid[i + 1] !== undefined) {
      if (grid[i + 1][j - 1]) {
        aliveNeighboursTotal++;
      }
      if (grid[i + 1][j]) {
        aliveNeighboursTotal++;
      }
      if (grid[i + 1][j + 1]) {
        aliveNeighboursTotal++;
      }
    }
    return aliveNeighboursTotal;
  }

  createNextGrid(grid) {
    let updatedGrid = [];
    grid.map((row, i) => {
      updatedGrid[i] = [];

      return row.map((cell, j) => {
        let aliveNeighboursCount = this.findAliveNeighbours(i, j, grid, row);

        if (grid[i][j] === true) {
          if (aliveNeighboursCount >= 2 && aliveNeighboursCount <= 3) {
            updatedGrid[i][j] = true;
          } else {
            updatedGrid[i][j] = false;
          }
        } else {
          updatedGrid[i][j] = aliveNeighboursCount === 3 ? true : false;
        }
      });
    });
    return updatedGrid;
  }
}

let api = new Api();

export default api;
