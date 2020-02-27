import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// pages components
import Home from "./views/Home"
import Dashboard from "./views/Dashboard";

// styles
import "./assets/fonts/fonts.css"
import "./app.css"



function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />

      </Switch>
    </React.Fragment>
  );
}

export default App;
