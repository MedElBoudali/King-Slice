import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Navbar = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">hot now</Link>
        </li>
        <li>
          <Link to="/pizzas">pizza menu</Link>
        </li>
        <li>
          <Link to="/">logo</Link>
        </li>
        <li>
          <Link to="/slicekings">slicekings</Link>
        </li>
        <li>
          <Link to="/order">order ahead</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
