import React from "react";
import styled, { css } from "styled-components";
import stripes from "../../assets/images/stripes.svg";

const LogoStyles = styled.div`
  transform: translateY(-25%);
  font-size: 6px;
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  div {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }
  @media (max-width: 600px) {
    transform: none;
  }
`;

const Est = styled.span`
  font-size: 1.5em;
  align-self: center;
`;

const LettersWrapper = styled.span`
  transform: scale(1.4);
  display: block;
  text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
  perspective: 100px;
`;

const Letter = css`
  font-size: 5em;
  color: var(--red);
  --scale: 1;
  --rotate: -10deg;
  --translateX: 0;
  --translateY: 0;
  --rotateX: 0deg;
  transform: scale(var(--scale)) rotate(var(--rotate))
    translateX(var(--translateX)) translateY(var(--translateY))
    rotateX(var(--rotateX));
  display: inline-block;
  line-height: 1;
  transition: transform 0.3s;
`;

const KLetter = styled.span`
  ${Letter}
  --translateX: -0.05;
`;
const ILetter = styled.span`
  ${Letter}
  --rotate: 5deg;
  --scale: 1.1;
  --translateX: 0.05em;
  --translateY: 0.2em;
`;
const NLetter = styled.span`
  ${Letter}
  --scale: 0.9;
  --translateY: -0.1em;
  --translateX: 0.1em;
`;
const GLetter = styled.span`
  ${Letter}
  --rotate: 3deg;
  --scale: 0.9;
  --translateX: 0.1em;
  --translateY: 0.23em;
`;

const Slice = styled.span`
  font-size: 3.2em;
  letter-spacing: 0.2em;
  transform: translateY(-0.15em);
`;

const Logo = () => {
  return (
    <LogoStyles>
      <div>
        <Est>EST 1991</Est>
        <h1>
          <LettersWrapper>
            <KLetter>k</KLetter>
            <ILetter>i</ILetter>
            <NLetter>n</NLetter>
            <GLetter>g</GLetter>
          </LettersWrapper>
          <Slice>slice</Slice>
        </h1>
      </div>
    </LogoStyles>
  );
};

export default Logo;
