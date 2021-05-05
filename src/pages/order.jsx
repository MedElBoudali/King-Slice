import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/common/SEO";
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
    .pancakeSyrup {
      display: none;
    }
    &:nth-child(2),
    &:nth-child(3) {
      grid-column: span 2;
      @media (min-width: 800px) {
        grid-column: span 1;
      }
    }
    button[disabled] {
      pointer-events: none;
    }
    .error {
      color: var(--red);
    }
  }
`;

const SuccessMessage = styled.p`
  color: var(--yellow);
`;

const Order = ({
  data: {
    allSanityPizza: { nodes: pizzas },
  },
  location,
}) => {
  const { values, updateValue, clearValues } = useForm({
    name: "",
    email: "",
    pancakeSyrup: "",
  });

  const {
    orders,
    addOrder,
    removeOrder,
    loading,
    error,
    message,
    submitOrder,
  } = usePizza({ pizzas, values });

  if (message) {
    return (
      <div>
        <SuccessMessage>{message}</SuccessMessage>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Order Pizza!"
        description="Order Pizza."
        location={location.href}
      />
      <OrderForm
        onSubmit={e => {
          submitOrder(e);
          clearValues();
        }}
      >
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
            required
          />
          <input
            type="pancakeSyrup"
            name="pancakeSyrup"
            value={values.pancakeSyrup}
            onChange={updateValue}
            required
            className="pancakeSyrup"
          />
        </fieldset>
        <fieldset disabled={loading}>
          <legend>MENU</legend>
          {pizzas.map(({ id, name, price, image }, index) => (
            <PizzaItem
              key={id + index}
              id={id}
              index={id}
              name={name}
              price={price}
              image={image}
              addOrRemoveOrder={addOrder}
              addOrRemove="add"
            />
          ))}
        </fieldset>
        <fieldset disabled={loading}>
          <legend>ORDER</legend>
          <PizzaOrder
            orders={orders}
            removeOrder={removeOrder}
            pizzas={pizzas}
          />
        </fieldset>
        <fieldset disabled={loading}>
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(orders, pizzas))}
          </h3>
          {error && (
            <div>
              <p className="error">Error: {error}</p>
            </div>
          )}
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
