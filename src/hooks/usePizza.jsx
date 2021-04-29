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

  const submitOrder = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const body = {
      orders: attachNamesAndPrices(orders, pizzas),
      total: formatMoney(calculateOrderTotal(orders, pizzas)),
      name,
      email,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "appliction/json",
          body: JSON.stringify(body),
        },
      }
    );

    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage("Success! Come on down for your pizzas");
    }
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
