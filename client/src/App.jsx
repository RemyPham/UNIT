import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/fonts/fonts.css"
import "./app.css"

import Home from "./views/Home"

function App() {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
