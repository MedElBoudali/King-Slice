import { graphql } from "gatsby";
import React from "react";
import Seo from "../components/common/Seo";
import useForm from "../hooks/useForm";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import calculatePizzaPrice from "../utils/calculatePizzaPrice";
import formatMoney from "../utils/formatMoney";
import styled from "styled-components";

const OrderForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    display: grid;
    gap: 1rem;
    overflow: auto;
    &:nth-child(2),
    &:nth-child(3) {
      grid-column: span 2;
      @media (min-width: 800px) {
        grid-column: span 1;
      }
    }
  }
`;

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100px;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1.4rem;
  }
  button + button {
    margin-left: 1rem;
  }

  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

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
      <OrderForm>
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
          {pizzas.map(({ id, name, price, image, slug: { current } }) => (
            <MenuItem key={id}>
              <GatsbyImage
                image={getImage(image ? image.asset : "")}
                alt={name}
              />
              <div>
                <h2>{name}</h2>
              </div>
              <div>
                {["S", "M", "L"].map((size, id) => (
                  <button type="button" key={id}>
                    {size} {formatMoney(calculatePizzaPrice(price, size))}
                  </button>
                ))}
              </div>
            </MenuItem>
          ))}
        </fieldset>
        <fieldset>
          <legend>ORDER</legend>
        </fieldset>
      </OrderForm>
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
