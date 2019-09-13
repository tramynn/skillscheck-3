import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <h1>Dashboard</h1>
          <Link to="/wizard/step/1">
            <button>Add New Property</button>
          </Link>
        </header>
      </div>
    );
  }
}

export default Dashboard;
