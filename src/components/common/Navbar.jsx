import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav>
    <Link to="/">hot now</Link>
    <Link to="/pizzas">pizza menu</Link>
    <Link to="/">logo</Link>
    <Link to="/slicekings">slicekings</Link>
    <Link to="/order">order ahead</Link>
  </nav>
);

export default Navbar;
