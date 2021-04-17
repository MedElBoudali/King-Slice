import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import PropTypes from "prop-types";

const PizzaWrapper = styled.div`
  display: grid;
  /* Take style from PizzaListWrapper not from PizzaWrapper */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 300px;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

const Pizza = ({ pizza }) => {
  return (
    <PizzaWrapper>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map(topping => topping.name).join(", ")}</p>
      {pizza.image && (
        <GatsbyImage image={getImage(pizza.image.asset)} alt={pizza.name} />
      )}
    </PizzaWrapper>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Pizza;
