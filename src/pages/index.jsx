import React from "react";
import SEO from "../components/common/SEO";

const Home = ({ location }) => {
  return (
    <>
      <SEO location={location.href} />
      <h1>Hello! i'm home page</h1>
    </>
  );
};

export default Home;
