import React from "react";
import Seo from "../components/common/Seo";
import styled from "styled-components";
import useLatestData from "../hooks/useLatestData";
import Skeleton from "../components/Skeleton";

const HomeWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  padding: 2rem 0;
`;

const Home = ({ location }) => {
  const { hotSlices, sliceKings } = useLatestData();

  return (
    <>
      <Seo title="HOT NOW" location={location.href} />
      <div className="center">
        <h1>The Best Pizza Downtown!</h1>
        <p>Open 11am to 11pm Every Single Day.</p>
        <HomeWrapper>
          <CurrentlySlicing sliceKings={sliceKings} />
          <HotSlices hotSlices={hotSlices} />
        </HomeWrapper>
      </div>
    </>
  );
};

const CurrentlySlicing = ({ sliceKings }) => {
  return (
    <div>
      {!sliceKings && <Skeleton count={4} />}
      {sliceKings && !sliceKings?.length && <p>No one is working right now!</p>}
    </div>
  );
};

const HotSlices = ({ hotSlices }) => {
  return (
    <div>
      {!hotSlices && <Skeleton count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin'g in the Case!</p>}
    </div>
  );
};

export default Home;
