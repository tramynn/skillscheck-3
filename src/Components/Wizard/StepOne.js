import React, { Component } from "react";
import ListingHeader from "./../ListingHeader/ListingHeader";

class StepOne extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <ListingHeader />
        </header>
        <main></main>
      </div>
    );
  }
}

export default StepOne;
