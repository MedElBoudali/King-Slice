import { useContext, useState } from "react";
import attachNamesAndPrices from "../utils/attachNamesAndPrices";
import calculateOrderTotal from "../utils/calculateOrderTotal";
import formatMoney from "../utils/formatMoney";
import OrderContext from "./context/OrderContext";

const usePizza = ({ pizzas, values: { name, email } }) => {
  // before using useContext
  // const [orders, setOrders] = useState([]);
  const [orders, setOrders] = useContext(OrderContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const addOrder = orderedPizza => setOrders([...orders, orderedPizza]);

  const removeOrder = index =>
    setOrders([...orders.slice(0, index), ...orders.slice(index + 1)]);

  const submitOrder = e => {
    e.preventDefault();
    setLoading(true);
    const body = {
      orders: attachNamesAndPrices(orders, pizzas),
      total: formatMoney(calculateOrderTotal(orders, pizzas)),
      name,
      email,
    };
    console.log(body);
  };

  return {
    orders,
    addOrder,
    removeOrder,
    loading,
    error,
    message,
    submitOrder,
  };
};

export default usePizza;
