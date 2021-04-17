import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

const countPizzasInToppings = pizzas => {};

const ToppingsFilter = props => {
  const { allSanityTopping, allSanityPizza } = useStaticQuery(graphql`
    query {
      allSanityTopping {
        nodes {
          id
          name
          vegetarian
        }
      }
      allSanityPizza {
        nodes {
          toppings {
            id
            name
          }
        }
      }
    }
  `);

  return (
    <div>
      <p>Toppings </p>
      {allSanityTopping &&
        allSanityTopping.nodes.map(topping => <p>{topping.name}</p>)}
    </div>
  );
};

ToppingsFilter.propTypes = {};

export default ToppingsFilter;
