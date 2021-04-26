import React from "react";
import Seo from "../components/common/Seo";

const Home = ({ location }) => {
  return (
    <>
      <Seo title="HOT NOW" location={location.href} />
      <h1>Hello! i'm home page</h1>
    </>
  );
};

export default Home;
