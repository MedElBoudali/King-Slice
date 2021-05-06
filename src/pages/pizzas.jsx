import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/common/SEO";
import ToppingsFilter from "../components/ToppingsFilter";
import PizzaList from "../components/PizzaList";
import PropTypes from "prop-types";

const Pizzas = ({ data: { allSanityPizza }, pageContext }) => {
  const pizzas = allSanityPizza.nodes;
  return (
    <>
      <Seo
        title={
          pageContext.topping
            ? `Pizzas with ${pageContext.topping}`
            : "Pizza Menu"
        }
      />
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
};

Pizzas.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pizzas;

export const query = graphql`
  query($topping: [String]) {
    allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        id
        name
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
