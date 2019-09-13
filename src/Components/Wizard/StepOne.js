import React, { Component } from "react";
import store, { STEP_ONE } from "./../../redux/store";
import ListingHeader from "./../ListingHeader/ListingHeader";
import { Link } from "react-router-dom";

class StepOne extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNext = () => {
    store.dispatch({
      type: STEP_ONE,
      payload: this.state
    });
  };

  render() {
    return (
      <div>
        <header>
          <ListingHeader />
        </header>
        <main>
          <form>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="address"
              placeholder="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <input
              name="city"
              placeholder="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <input
              name="state"
              placeholder="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
            <input
              name="zip"
              placeholder="zip"
              value={this.state.zip}
              onChange={this.handleChange}
            />
            <Link to="/wizard/step/2">
              <button onClick={this.handleNext}>Next</button>
            </Link>
          </form>
        </main>
      </div>
    );
  }
}

export default StepOne;
