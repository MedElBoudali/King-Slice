import React from "react";
import { graphql } from "gatsby";

const Pizzas = ({ data: { allSanityPizza } }) => {
  const pizzas = allSanityPizza.nodes;
  return (
    <>
      <h1>Hello! we have {pizzas.length} pizzas on the store!</h1>
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
