import React from "react";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";


function App(){
  

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
           
          />
          </Switch>
      </React.Fragment>
    );
  }


export default App
