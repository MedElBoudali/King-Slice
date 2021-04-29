import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from "./formatMoney";

const attachNamesAndPrices = (orders, pizzas) => {
  return orders.map(order => {
    const pizza = pizzas.find(pizza => pizza.id === order.id);
    return {
      ...order,
      name: pizza.name,
      thumbnail: pizza.image.asset.url,
      price: formatMoney(calculatePizzaPrice(pizza.price, order.size)),
    };
  });
};

export default attachNamesAndPrices;
