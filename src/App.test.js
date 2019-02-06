import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import api from "./api";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const mockGrid = [
  [true, true, false, true, false, true, true, true, true, false],
  [true, false, true, false, false, false, true, false, true, false],
  [false, true, false, false, false, true, true, false, true, true],
  [false, true, false, false, false, false, false, false, true, false],
  [false, true, true, true, true, true, false, true, false, true],
  [true, false, false, true, false, true, true, true, true, false],
  [true, false, true, true, false, false, false, false, false, false],
  [true, false, true, false, true, false, true, false, false, true],
  [false, false, true, false, true, false, true, false, false, true],
  [true, false, true, false, true, true, true, false, true, true]
];

const falseMockGrid = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false]
];

const underpopulationMock = [
  [false, true, false],
  [false, true, false],
  [false, false, false]
];


test("no interactions - all dead", () => {});

test("underpopulation: cell has fewer than 2 neighbours dies", () => {
  expect(api.findAliveNeighbours(underpopulationMock)).toEqual([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);
});

test("overcrowding: cell has more than 3 neighbours", () => {
  const overcrowdingMock = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ];
  expect(api.findAliveNeighbours(overcrowdingMock)).toEqual([
    [true, true, true],
    [true, false, true],
    [true, true, true]
  ]);
  });
  
