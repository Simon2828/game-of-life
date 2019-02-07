import React, { Component } from "react";
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
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.setState({ grid: api.createSeedGrid() });
  }

  handleRefresh() {
    this.setState({ grid: api.createSeedGrid() });
  }

  handleUpdateGrid() {
    let gridUpdate = api.createNextGrid(this.state.grid);
    this.setState({ grid: gridUpdate });
  }

  render() {
    return (
      <div className="App">
        <section>
          <Grid grid={this.state.grid} />
          <button onClick={this.handleUpdateGrid}>update grid</button>
          <button onClick={this.handleRefresh}>refresh grid</button>
        </section>
      </div>
    );
  }
}

export default App;
