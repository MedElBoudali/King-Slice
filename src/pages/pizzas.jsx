import React from "react";
import { graphql } from "gatsby";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";
import SEO from "../components/common/SEO";

const Pizzas = ({ data: { allSanityPizza }, location, pageContext }) => {
  const pizzas = allSanityPizza.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.topping
            ? `Pizzas with ${pageContext.topping}`
            : "Pizza Menu"
        }
        location={location.href}
      />
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
