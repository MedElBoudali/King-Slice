import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const ToppingsFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .count {
      background: white;
      padding: 2px 5px;
    }
    &:hover {
      background: var(--yellow);
    }
    &[aria-current="page"] {
      background-color: var(--yellow);
    }
  }
`;

const countPizzasInToppings = pizzas => {
  const counts = pizzas
    .map(pizza => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortingToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortingToppings;
};

const ToppingsFilter = () => {
  const { allSanityTopping, allSanityPizza } = useStaticQuery(query);

  return (
    <ToppingsFilterWrapper>
      <Link to="/pizzas/">
        <span className="name">ALL</span>
        <span className="count">{allSanityTopping.nodes.length}</span>
      </Link>
      {countPizzasInToppings(allSanityPizza.nodes).map(topping => (
        <Link to={`/topping/${topping.name}/`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsFilterWrapper>
  );
};

ToppingsFilter.propTypes = { pizzas: PropTypes.array };

export default ToppingsFilter;

const query = graphql`
  query {
    allSanityTopping {
      nodes {
        id
        name
        vegetarian
      }
    }
    allSanityPizza {
      nodes {
        toppings {
          id
          name
        }
      }
    }
  }
`;
