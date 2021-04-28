import React from "react";
import styled from "styled-components";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from "../../styles/Typography";
import stripes from "../../assets/images/stripes.svg";
import "normalize.css";
import PropTypes from "prop-types";

const SiteBorderStyle = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem;
  margin-top: clamp(2rem, 10vw, 12rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  background: url(${stripes});
  background-size: 1500px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const LayoutWrraper = styled.div`
  background: white;
`;

const LayoutMain = styled.main`
  padding: 0 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyle>
        <LayoutWrraper>
          <header>
            <Navbar />
          </header>
          <LayoutMain>{children}</LayoutMain>
          <Footer />
        </LayoutWrraper>
      </SiteBorderStyle>
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
