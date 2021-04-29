import { graphql } from "gatsby";
import React from "react";
import Seo from "../components/common/Seo";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import usePizza from "../hooks/usePizza";
import PizzaOrder from "../components/order/PizzaOrder";
import PizzaItem from "../components/order/PizzaItem";
import calculateOrderTotal from "../utils/calculateOrderTotal";
import formatMoney from "../utils/formatMoney";

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
    align-content: start;
    &:nth-child(2),
    &:nth-child(3) {
      grid-column: span 2;
      @media (min-width: 800px) {
        grid-column: span 1;
      }
    }
    button[disabled] {
      /* pointer-events: none; */
      background-color: var(--grey);
      color: var(--red);
      cursor: progress;
    }
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

  const {
    orders,
    addOrder,
    removeOrder,
    loading,
    error,
    message,
    submitOrder,
  } = usePizza({
    pizzas,
    values,
  });

  return (
    <>
      <Seo
        title="Order Pizza!"
        description="Order Pizza."
        location={location.href}
      />
      <OrderForm onSubmit={submitOrder}>
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
          {pizzas.map(({ id, name, price, image, slug }) => (
            <PizzaItem
              key={id}
              id={id}
              name={name}
              price={price}
              image={image}
              slug={slug}
              addOrRemoveOrder={addOrder}
              addOrRemove="add"
              pizzaSize={1}
              index={id}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>ORDER</legend>
          <PizzaOrder
            orders={orders}
            removeOrder={removeOrder}
            pizzas={pizzas}
          />
        </fieldset>
        <fieldset>
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(orders, pizzas))}
          </h3>
          <button type="submit" disabled={loading}>
            {loading ? "Placing Order ..." : "Order Now"}
          </button>
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
            url
          }
        }
      }
    }
  }
`;
