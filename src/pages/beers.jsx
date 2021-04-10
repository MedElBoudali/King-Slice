import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";

const Beers = props => {
  return (
    <div>
      <Navbar />
      <h1>Hello! i'm Beers page</h1>
    </div>
  );
};

Beers.propTypes = {};

export default Beers;
