import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { CLEAR } from "../../redux/store";

class ListingHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClear = () => {
    store.dispatch({
      type: CLEAR
    });
  };

  render() {
    return (
      <header>
        <h1>Add New Listing</h1>
        <Link to="/">
          <button onClick={this.handleClear}>Cancel</button>
        </Link>
      </header>
    );
  }
}

export default ListingHeader;
