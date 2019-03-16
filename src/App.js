import React, { Component } from "react";
import "./App.css";
import api from "./api.js";
import Grid from "./Grid.js";
import SizeOfGrid from "./SizeOfGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [[]],
      running: false,
      numberAlive: null,
      size: 50
    };
    this.handleUpdateGrid = this.handleUpdateGrid.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.toggleCell = this.toggleCell.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(
      { grid: api.createSeedGrid(this.state.size) },
      this.runIteration()
    );
  }

  runIteration() {
    window.setInterval(() => {
      this.handleUpdateGrid();
    }, 1000);
  }

  handleRefresh() {
    this.setState({ grid: api.createSeedGrid() });
  }

  handleUpdateGrid() {
    // let [updatedGrid, aliveNeighboursCount] = api.createNextGrid(this.state.grid);
    let updatedGrid = api.createNextGrid(this.state.grid);
    console.log("updatedGrid", updatedGrid);
    this.setState({
      grid: updatedGrid.updatedGrid,
      numberAlive: updatedGrid.totalAlive
    });
  }

  toggleCell(cell, i, j) {
    console.log("cell", cell, "i", i, "j", j);
    cell = !cell;
    let gridCopy = [...this.state.grid];
    gridCopy[i][j] = cell;
    this.setState({ grid: gridCopy });
    if (cell) {
      this.setState({ numberAlive: this.state.numberAlive + 1 });
    } else {
      this.setState({ numberAlive: this.state.numberAlive - 1 });
    }
  }

  handleChange(event) {
    this.setState({size: parseInt(event.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    // value to pass to updateGrid
    this.setState(
      { grid: api.createSeedGrid(this.state.size) }
      // this.runIteration()
    );
  }

  render() {
    return (
      <div className="App">
        <section>
          <SizeOfGrid handleChange={this.handleChange} handleSubmit={this.handleSubmit} size={this.state.size}/>
          <Grid grid={this.state.grid} onClick={this.toggleCell} />
          <button onClick={this.handleUpdateGrid}>update grid</button>
          {/* <button onClick={this.handleRefresh}>refresh grid</button> */}
          <div>Number alive: {this.state.numberAlive}</div>
        </section>
      </div>
    );
  }
}

export default App;
