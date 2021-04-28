import { useState } from "react";

const usePizza = ({ pizzas, inputs }) => {
  const [order, setOrder] = useState([]);
  const addOrder = orderedPizza => setOrder([...order, orderedPizza]);

  const removeOrder = index =>
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);

  return {
    order,
    addOrder,
    removeOrder,
  };
};

export default usePizza;
