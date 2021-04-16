import React from "react";
import { graphql } from "gatsby";
import PizzaList from "../components/PizzaList";

const Pizzas = ({ data: { allSanityPizza } }) => {
  const pizzas = allSanityPizza.nodes;
  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
};

export default Pizzas;

export const query = graphql`
  query {
    allSanityPizza {
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
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`;
