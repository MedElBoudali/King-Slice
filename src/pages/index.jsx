import React from "react";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const Home = props => {
  return (
    <div>
      <Navbar />
      <h1>Hello! i'm home page</h1>
    </div>
  );
};

Home.propTypes = {};

export default Home;
