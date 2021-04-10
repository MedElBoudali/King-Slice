import React from "react";
import Navbar from "./common/Navbar";
import PropTypes from "prop-types";
import Footer from "./common/Footer";
import GlobalStyles from "../styles/GlobalStyles";
import "normalize.css";
import Typography from "../styles/Typography";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
