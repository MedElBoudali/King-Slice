import { useContext, useState } from "react";
import OrderContext from "./context/OrderContext";

const usePizza = ({ pizzas, inputs }) => {
  // before using useContext
  // const [orders, setOrders] = useState([]);
  const [orders, setOrders] = useContext(OrderContext);
  const addOrder = orderedPizza => setOrders([...orders, orderedPizza]);

  const removeOrder = index =>
    setOrders([...orders.slice(0, index), ...orders.slice(index + 1)]);

  return {
    orders,
    addOrder,
    removeOrder,
  };
};

export default usePizza;
