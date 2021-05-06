import React from "react";
import PizzaItem from "./PizzaItem";
import PropTypes from "prop-types";

const PizzaOrder = ({ pizzas, orders, removeOrder }) => {
  return (
    <>
      {orders.map((order, index) => {
        const { id, name, image, price, slug } = pizzas.find(
          pizza => pizza.id === order.id
        );
        return (
          <PizzaItem
            key={index}
            id={id}
            index={index}
            name={name}
            price={price}
            image={image}
            slug={slug}
            addOrRemoveOrder={removeOrder}
            addOrRemove="remove"
            pizzaSize={order.size}
          />
        );
      })}
    </>
  );
};

PizzaOrder.propTypes = {
  pizzas: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
  removeOrder: PropTypes.func.isRequired,
};

export default PizzaOrder;
