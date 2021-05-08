import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NavStyle = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    --columns: 4;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(var(--columns), 1fr);
    justify-items: center;
    margin-bottom: 2rem;
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

const NavStyleLink = styled(Link)`
  --rotate: 0deg;
  transform: rotate(var(--rotate));
  font-size: 3rem;
  margin-top: -6rem;
  display: block;
  &:nth-child(1),
  &:nth-child(4) {
    --rotate: 6deg;
  }
  &:nth-child(2),
  &:nth-child(5) {
    --rotate: -6deg;
  }
  &:hover:not(:nth-child(3)) {
    color: var(--red);
    --rotate: -1deg;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    &:nth-child(3) {
      order: -1;
      grid-column: 1 / -1;
    }
    &:not(:nth-child(3)) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 500px) {
    &:not(:nth-child(3)) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  /* Style current page link */
  /* &[aria-current="page"] {
    color: var(--red);
  } */
`;

const Navbar = () => (
  <NavStyle>
    <NavStyleLink to="/">hot now</NavStyleLink>
    <NavStyleLink to="/pizzas/">pizza menu</NavStyleLink>
    <NavStyleLink to="/">
      <Logo />
    </NavStyleLink>
    <NavStyleLink to="/slicekings/">slicekings</NavStyleLink>
    <NavStyleLink to="/order/">order ahead</NavStyleLink>
  </NavStyle>
);

export default Navbar;
