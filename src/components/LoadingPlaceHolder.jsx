import React from "react";
import styled from "styled-components";

const GridItemWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  .Loading {
    height: 400px;
    width: 500px;
  }
`;

const GridItem = styled.div`
  text-align: center;
  position: relative;
  img {
    border: 1px solid red;
    height: auto;
  }
  p {
    transform: rotate(-2deg) translateY(-50%);
    position: absolute;
    width: 100%;
    left: 0;
  }
`;

const LoadingPlaceholder = ({ count }) => {
  return (
    <GridItemWrapper>
      {Array.from({ length: count }, (_, i) => (
        <GridItem key={i}>
          <p className="mark" key={i}>
            loading...
          </p>
          <img
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
            className="Loading"
            alt="Loading"
          />
        </GridItem>
      ))}
    </GridItemWrapper>
  );
};

export default LoadingPlaceholder;
