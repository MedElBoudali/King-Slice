import { graphql } from "gatsby";
import React from "react";
import Seo from "../components/common/Seo";
import useForm from "../hooks/useForm";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Order = ({
  data: {
    allSanityPizza: { nodes: pizzas },
  },
  location,
}) => {
  const { values, updateValue } = useForm({
    name: "",
    email: "",
  });
  return (
    <>
      <Seo
        title="Order Pizza!"
        description="Order Pizza."
        location={location.href}
      />
      <form>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset>
          <legend>MENU</legend>
          {pizzas.map(pizza => (
            <div>
              <h2>{pizza.name}</h2>
              <GatsbyImage image={getImage(pizza.image.asset)} />
            </div>
          ))}
        </fieldset>
        <fieldset>
          <legend>ORDER</legend>
        </fieldset>
      </form>
    </>
  );
};

export default Order;

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
        image {
          asset {
            gatsbyImageData(width: 100, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
