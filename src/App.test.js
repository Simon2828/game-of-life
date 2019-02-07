import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import api from "./api";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("scenario 0: no interactions - all dead", () => {
  const noInteractions = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];
  expect(api.createNextGrid(noInteractions)).toEqual([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);
});

test("scenario 1: underpopulation: cell has fewer than 2 neighbours dies", () => {
  const underpopulationMock = [
    [false, true, false],
    [false, true, false],
    [false, false, false]
  ];
  expect(api.createNextGrid(underpopulationMock)).toEqual([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);
});

test("scenario 2: overcrowding: cell has more than 3 neighbours", () => {
  const overcrowdingMock = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ];
  expect(api.createNextGrid(overcrowdingMock)).toEqual([
    [true, true, true],
    [true, false, true],
    [true, true, true]
  ]);
});

test("scenario 3: survival: live cell with 2 or 3 neighbours lives", () => {
  const survivalMock = [
    [false, false, false],
    [true, true, true],
    [false, false, false]
  ];
  expect(api.createNextGrid(survivalMock)).toEqual([
    [false, true, false],
    [false, true, false],
    [false, true, false]
  ]);
});

test("scenario 4: creation of life: cell created when dead cell has 3 neighbours", () => {
  const creationMock = [
    [false, true, false],
    [true, true, false],
    [false, false, false]
  ];
  expect(api.createNextGrid(creationMock)).toEqual([
    [true, true, false],
    [true, true, false],
    [false, false, false]
  ]);
});
