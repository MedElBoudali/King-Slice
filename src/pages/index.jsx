import React from "react";
import SEO from "../components/common/SEO";
import styled from "styled-components";
import useLatestData from "../hooks/useLatestData";
import Skeleton from "../components/Skeleton";

const HomeWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

const ItemComponentWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;

const DataItem = styled.div`
  position: relative;
  text-align: center;
  img {
    height: auto;
    font-size: 0;
    object-fit: cover;
    background: url(${({ background }) => background});
    background-size: cover;
  }
  p {
    top: 0;
    transform: rotate(-2deg) translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
  }
`;

const Home = ({ location }) => {
  const { hotSlices, sliceKings } = useLatestData();

  return (
    <>
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
      <h2 className="center">
        <span className="mark tilt">Slice Kings On</span>
      </h2>
      <p style={{ margin: "2rem 0" }}>Standing by, ready to slice you up!</p>
      {!sliceKings && <Skeleton count={4} />}
      {sliceKings && !sliceKings?.length && <p>No one is working right now!</p>}
      {sliceKings?.length && <ItemComponent data={sliceKings} />}
    </div>
  );
};

const HotSlices = ({ hotSlices }) => {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices On</span>
      </h2>
      <p style={{ margin: "2rem 0" }}>Come on by, buy the slice!</p>
      {!hotSlices && <Skeleton count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin'g in the Case!</p>}
      {hotSlices?.length && <ItemComponent data={hotSlices} />}
    </div>
  );
};

const ItemComponent = ({ data }) => {
  return (
    <ItemComponentWrapper>
      {data.map(item => (
        <DataItem background={item.image.asset.metadata.lqip}>
          <p>
            <span className="mark">{item.name}</span>
          </p>
          <img
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            width="500"
            height="400"
          />
        </DataItem>
      ))}
    </ItemComponentWrapper>
  );
};

export default Home;
