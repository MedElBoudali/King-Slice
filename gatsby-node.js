const path = require("path");

const turnPizzasIntoPages = async ({ graphql, actions }) => {
  const pizzaTemplate = path.resolve("./src/templates/Pizza.jsx");
  const { data } = await graphql(`
    query {
      allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.allSanityPizza.nodes.forEach(pizza => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: { slug: pizza.slug.current },
    });
  });
};

const turnToppingsIntoPages = async ({ graphql, actions }) => {
  const toppingTemplate = path.resolve("./src/pages/pizzas.jsx");
  const { data } = await graphql(`
    query {
      allSanityTopping {
        nodes {
          id
          name
          vegetarian
        }
      }
    }
  `);
  data.allSanityTopping.nodes.forEach(topping => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: { topping: topping.name },
    });
  });
};

exports.createPages = async params => {
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
  ]);
};
