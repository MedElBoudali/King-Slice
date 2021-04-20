import React from "react";
import { graphql } from "gatsby";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";

const Pizzas = ({ data: { allSanityPizza } }) => {
  const pizzas = allSanityPizza.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
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
