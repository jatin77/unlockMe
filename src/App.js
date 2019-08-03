import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import "./style/style.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Nav from "./component/nav/Nav";
import CoachingStyles from "./pages/coachingStyles/CoachingStyles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/coachingStyles" component={CoachingStyles} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
