let updatedGrid;

class Api {
  createSeedGrid() {

    let grid = new Array(10);

    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(10);
      for (let j = 0; j < grid.length; j++) {
        // make each element boolean likely to be false
        grid[i][j] = Math.random() >= 0.8;
      }
    }
    return grid;
  }

  findAliveNeighbours(grid) {
    updatedGrid = [...grid]
    grid.forEach((row, i) => {
      row.forEach((column, j) => {
        let aliveNeighboursTotal = 0;
        // current row
        if (grid[i] !== undefined) {
          if (row[j - 1]) {
            aliveNeighboursTotal++;
          }
          if (row[j + 1]) {
            aliveNeighboursTotal++;
          }
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
        // console.log("counter", aliveNeighboursTotal, "coords", i, j);



        let updatedGridCell = this.updateGrid(column, aliveNeighboursTotal, i, j);
        console.log('updatedGridCell', i,j, updatedGridCell)
        updatedGrid[i][j] = updatedGridCell 
      });
    });
    console.log('updatedGrid', updatedGrid)
    return updatedGrid;
  }

  // create seed grid
  // update state
  // pass grid to findaliveneighbours

  updateGrid(column, aliveNeighboursTotal, rowCoords, columnCoords) {
    console.log(column, ' ',rowCoords, ':',columnCoords) // THIS IS OUT - COLUMN IN UI NOT SHOWING WHAT IS LOGGED
    // scenario 1 underpopulation
    if (column) {
      if (aliveNeighboursTotal < 2) {
        column = false;
        updatedGrid[rowCoords][columnCoords] = column;
      }
    }
    // scenario 2 overcrowding
    if (column) {
      
      if (aliveNeighboursTotal > 3) {
        column = false;
        updatedGrid[rowCoords][columnCoords] = column;
      }
    }
    // scenario 3 survival
    if (column) {
      if (aliveNeighboursTotal === 2 || aliveNeighboursTotal === 3) {
        console.log('survival')
        column = true;
        updatedGrid[rowCoords][columnCoords] = column;
        console.log('updatedGrid position',updatedGrid[rowCoords][columnCoords])
      }
    }
    // scenario 4 creation
    if (!column) {
      if (aliveNeighboursTotal === 3) {
        column = true;
        updatedGrid[rowCoords][columnCoords] = column;
      }
    }

    return updatedGrid[rowCoords][columnCoords];
  }
}

let api = new Api();

export default api;
