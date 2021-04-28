import React from "react";
import PizzaItem from "./PizzaItem";

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

export default PizzaOrder;
