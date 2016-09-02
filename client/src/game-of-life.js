// Copyright (c) 2016 Tim Perkins

import React from "react";
import ReactDOM from "react-dom";

class GameOfLifeApp extends React.Component {

  render() {
    return React.createElement('div', {id: "GameOfLifeApp"}, "The Game Of Life!");
  }
}

function startGameOfLifeApp(renderElement) {
  // eslint-disable-next-line no-console, no-undef
  console.info("Starting The Game Of Life!");
  ReactDOM.render(React.createElement(GameOfLifeApp), renderElement);
}

// eslint-disable-next-line no-undef
window.startGameOfLifeApp = startGameOfLifeApp;
