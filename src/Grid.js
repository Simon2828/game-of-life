import React from "react";
import "./App.css";

const Grid = ({ grid }) => {
  return grid.map((row, i) => {
    return (
      <div className="flex-container" key={i}>
        {row.map((cell, j) =>
          cell ? (
            <div className="grid-cell_alive" key={j}>
              {cell}
            </div>
          ) : (
            <div className="grid-cell" key={j}>
              {cell}
            </div>
          )
        )}
      </div>
    );
  });
};

export default Grid;
