const path = require("path");

const turnPizzasIntoPages = async ({ graphql, actions }) => {
  const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
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

exports.createPages = async params => {
  await turnPizzasIntoPages(params);
};
