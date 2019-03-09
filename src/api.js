// run automatically

// count alive/generated cells

// option to change size of grid

// refactor form component

// click on cell to make it alive / dead

// save to database - maybe number of iterations??

// extend tests

// react hooks??

// actually have a grid
// background-image:
// linear-gradient(#333 1px, transparent 1px),
// linear-gradient(90deg, #333 1px, transparent 1px); ???

class Api {
  createSeedGrid(sizeOfGrid) {
    let grid = new Array(sizeOfGrid);
    console.log("grid", grid);

    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(sizeOfGrid);
      for (let j = 0; j < grid.length; j++) {
        grid[i][j] = Math.random() >= 0.75;
      }
    }

    return grid;
  }

  findAliveNeighbours(i, j, grid, row) {
    let aliveNeighboursTotal = 0;
    // current row

    // row[j-1] because checking neighbour to left, row[j+1] neighbour to right
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

      return aliveNeighboursTotal;
    }
  }

  createNextGrid(grid) {
    let updatedGrid = [];
    let aliveNeighboursCount;
    grid.map((row, i) => {
      updatedGrid[i] = [];

      return row.map((cell, j) => {
        aliveNeighboursCount = this.findAliveNeighbours(i, j, grid, row);

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

    let totalAlive = this.getTotalAlive(updatedGrid);

    return {
      updatedGrid,
      aliveNeighboursCount,
      totalAlive
    };
  }

  getTotalAlive(grid) {
    
    let filteredArray = grid.map(row=>{
      return row.filter(cell=>cell)
    }).flat().length

    return filteredArray

    // return grid.map(row => {
    //   return row.filter(cell => {
    //     if (cell) {
    //       return cell;
    //     }
    //   });
    // }).length;
  }
}

let api = new Api();

export default api;
