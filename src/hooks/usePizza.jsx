import { useState } from "react";

const usePizza = ({ pizzas, inputs }) => {
  const [orders, setOrder] = useState([]);
  const addOrder = orderedPizza => setOrder([...orders, orderedPizza]);

  const removeOrder = index =>
    setOrder([...orders.slice(0, index), ...orders.slice(index + 1)]);

  return {
    orders,
    addOrder,
    removeOrder,
  };
};

export default usePizza;
