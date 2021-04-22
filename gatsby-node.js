const path = require("path");
const fetch = require("isomorphic-fetch");

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

const fetchBeersAndTurnIntoNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const res = await fetch("https://api.sampleapis.com/beers/ale");
  const beers = await res.json();
  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: "Beer",
        mediaType: "application/json",
        contentDigest: createContentDigest(beer),
      },
    };
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
};

const turnSliceKingsIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      sliceKings: allSanityPerson {
        totalCount
        nodes {
          id
          name
          description
          slug {
            current
          }
        }
      }
    }
  `);

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.sliceKings.totalCount / pageSize);
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/slicekings/${i + 1}`,
      component: path.resolve("./src/pages/slicekings.jsx"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
};

exports.sourceNodes = async params => {
  // Fetching external API
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
};

exports.createPages = async params => {
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
    turnSliceKingsIntoPages(params),
  ]);
};
