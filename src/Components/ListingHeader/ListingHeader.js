import React from "react";
import { Link } from "react-router-dom";

export default function ListingHeader() {
  return (
    <header>
      <h1>Add New Listing</h1>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </header>
  );
}
