import React from "react";
import "./App.css";

const Grid = ({ grid, onClick }) => {
  return grid.map((row, i) => {
    return (
      <div className="flex-container" key={i}>
        {row.map((cell, j) =>
          cell ? (
            <div className="grid-cell_alive" onClick={() => onClick(cell,i,j)} key={j}>
              {cell}
            </div>
          ) : (
            <div className="grid-cell" onClick={() => onClick(cell,i,j)} key={j}>
              {cell}
            </div>
          )
        )}
      </div>
    );
  });
};

export default Grid;
