let updatedGrid;

class Api {
  createSeedGrid() {

    let grid = new Array(20);

    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(20);
      for (let j = 0; j < grid.length; j++) {
        // make each element boolean likely to be false
        grid[i][j] = Math.random() >= 0.8;
      }
    }
    return grid;
  }

  findAliveNeighbours(i,j,grid,row) {
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
        return aliveNeighboursTotal;
  }

  createNextGrid(grid) {
    let updatedGrid = []
    grid.map((row, i) => {
      updatedGrid[i] = []

      return row.map((column, j) => {
        let aliveNeighbourCount = this.findAliveNeighbours(i,j,grid, row)
        if (updatedGrid[i][j] === true) {
          if (aliveNeighbourCount > 1 && aliveNeighbourCount < 4) {
            updatedGrid[i][j] = true;
          } else {
            updatedGrid[i][j] = false;
          }
        } else {
          updatedGrid[i][j] = (aliveNeighbourCount === 3) ? true : false;
        }
        

      });
    });

    return updatedGrid;
  }

  // create seed grid
  // update state
  // pass grid to findaliveneighbours

}

let api = new Api();

export default api;
