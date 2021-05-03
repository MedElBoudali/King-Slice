import React from "react";
import Seo from "../components/common/Seo";
import styled from "styled-components";

const CurrentlySlicing = styled.div``;

const HotSlicesWrapper = styled.div``;

const HotSlices = () => {
  return (
    <HotSlicesWrapper>
      <p>HotSlices</p>
    </HotSlicesWrapper>
  );
};

const Home = ({ location }) => {
  return (
    <div className="center">
      <Seo title="HOT NOW" location={location.href} />
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day.</p>
      <CurrentlySlicing></CurrentlySlicing>
      <HotSlices />
    </div>
  );
};

export default Home;
