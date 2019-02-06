import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./api.js";
import Grid from "./Grid.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [[]]
    };
    this.handleUpdateGrid = this.handleUpdateGrid.bind(this);
  }

  componentDidMount() {
    this.setState({ grid: api.createSeedGrid() });
  }

  handleUpdateGrid() {
    console.log("here on click");
    let gridUpdate = api.findAliveNeighbours(this.state.grid);
    this.setState(
      { grid: gridUpdate }
    );
  }

  render() {
    return (
      <div className="App">
        <section>
          <Grid grid={this.state.grid} />
        </section>
        <button onClick={this.handleUpdateGrid}>update grid</button>
      </div>
    );
  }
}

export default App;
