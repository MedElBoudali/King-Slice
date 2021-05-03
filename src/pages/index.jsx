import React from "react";
import Seo from "../components/common/Seo";
import styled from "styled-components";
import useLatestData from "../hooks/useLatestData";
import LoadingPlaceholder from "../components/LoadingPlaceholder";

const HomeWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

const CurrentlySlicingWrapper = styled.div``;

const HotSlicesWrapper = styled.div``;

const Home = ({ location }) => {
  const { hotSlices, sliceKings } = useLatestData();

  return (
    <div className="center">
      <Seo title="HOT NOW" location={location.href} />
      <h1>The Best Pizza Downtown!</h1>
      <p>
        <span role="img" aria-label="Clock">
          🕚
        </span>{" "}
        Open 11am to 11pm Every Single Day.
      </p>
      <HomeWrapper>
        <CurrentlySlicing sliceKings={sliceKings} />
        <HotSlices hotSlices={hotSlices} />
      </HomeWrapper>
    </div>
  );
};

const CurrentlySlicing = () => {
  return (
    <CurrentlySlicingWrapper>
      <LoadingPlaceholder count={3} />
    </CurrentlySlicingWrapper>
  );
};

const HotSlices = () => {
  return (
    <HotSlicesWrapper>
      <LoadingPlaceholder count={4} />
    </HotSlicesWrapper>
  );
};

export default Home;
