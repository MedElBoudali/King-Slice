import React from "react";
import Pizza from "./Pizza";
import styled from "styled-components";
import PropTypes from "prop-types";

const PizzaListWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 400px;
`;

const PizzaList = ({ pizzas }) => {
  return (
    <PizzaListWrapper>
      {pizzas.map(pizza => (
        <Pizza pizza={pizza} key={pizza.id} />
      ))}
    </PizzaListWrapper>
  );
};

PizzaList.propTypes = {
  pizzas: PropTypes.array.isRequired,
};

export default PizzaList;
