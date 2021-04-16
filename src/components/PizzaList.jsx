import React from "react";
import Pizza from "./Pizza";
import PropTypes from "prop-types";

const PizzaList = ({ pizzas }) => {
  return (
    <>
      {pizzas.map(pizza => (
        <Pizza pizza={pizza} key={pizza.id} />
      ))}
    </>
  );
};

PizzaList.propTypes = {
  pizzas: PropTypes.array.isRequired,
};

export default PizzaList;
