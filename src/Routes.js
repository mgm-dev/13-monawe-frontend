import React, { Component } from "react";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import JoinStepOne from "./pages/JoinSteps/JoinStepOne";
import JoinStepTwo from "./pages/JoinSteps/JoinStepTwo";
import JoinStepThree from "./pages/JoinSteps/JoinStepThree";
import Login from "./pages/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/JoinStepOne" component={JoinStepOne} />
          <Route exact path="/JoinStepTwo" component={JoinStepTwo} />
          <Route exact path="/JoinStepThree" component={JoinStepThree} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
