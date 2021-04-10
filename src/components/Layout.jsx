import React from "react";
import Navbar from "./common/Navbar";
import PropTypes from "prop-types";
import Footer from "./common/Footer";

const Layout = ({ children }) => {
  return (
    <>
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
