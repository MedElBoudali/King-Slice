import calculatePizzaPrice from "./calculatePizzaPrice";

const calculateOrderTotal = (orders, pizzas) => {
  return orders.reduce((acc, order) => {
    const pizza = pizzas.find(pizza => pizza.id === order.id);
    return acc + calculatePizzaPrice(pizza.price, order.size);
  }, 0);
};

export default calculateOrderTotal;
