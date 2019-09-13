import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <div>
          <main>
            <Route path="/wizard/step/1" component={StepOne} />
            <Route path="/wizard/step/2" component={StepTwo} />
            <Route path="/wizard/step/3" component={StepThree} />
          </main>
        </div>
      </Switch>
    );
  }
}

export default Wizard;
