import React from "react";
import "./App.css";

const Grid = ({ grid }) => {
  return grid.map((row, j) => {
      return (
    <div className="flex-container" key={j}>
    {row.map((cell,i) => cell ? <div className="grid-cell_alive" key={i}>{cell}</div> : <div className="grid-cell" key={i}>{cell}</div>)}
    </div>

      )
  });
};

export default Grid;
