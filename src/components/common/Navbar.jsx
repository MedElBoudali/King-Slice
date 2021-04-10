import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import Logo from "./Logo";

const NavStyle = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 3rem;
  align-items: center;
  text-align: center;
`;

const NavStyleLink = styled(Link)`
  --rotate: 0deg;
  transform: rotate(var(--rotate));
  font-size: 3rem;

  &:nth-child(1),
  &:nth-child(4) {
    --rotate: 6deg;
  }
  &:nth-child(2),
  &:nth-child(5) {
    --rotate: -6deg;
  }
  &:not(:last-child) {
    /* margin-right: 10px; */
  }

  &:hover {
    color: var(--red);
    --rotate: -1deg;
  }
`;

const LogoStyle = css`
  /* transform: translateY(-25%); */
`;

const Navbar = () => (
  <NavStyle>
    <NavStyleLink to="/">hot now</NavStyleLink>
    <NavStyleLink to="/pizzas">pizza menu</NavStyleLink>
    <NavStyleLink to="/">
      <Logo logoStyle={LogoStyle} />
    </NavStyleLink>
    <NavStyleLink to="/slicekings">slicekings</NavStyleLink>
    <NavStyleLink to="/order">order ahead</NavStyleLink>
  </NavStyle>
);

export default Navbar;
