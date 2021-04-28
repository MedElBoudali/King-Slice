import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import formatMoney from "../../utils/formatMoney";
import calculatePizzaPrice from "../../utils/calculatePizzaPrice";

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100px;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1.4rem;
  }
  button + button {
    margin-left: 1rem;
  }

  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

const PizzaItem = ({
  id,
  name,
  image,
  price,
  slug,
  addOrRemoveOrder,
  addOrRemove,
  pizzaSize,
}) => {
  const addOrder = (id, size) => {
    addOrRemoveOrder({ id, size });
  };

  const removeOrder = () => {};
  return (
    <MenuItem>
      <GatsbyImage
        image={image ? getImage(image.asset) : ""}
        alt={name ?? ""}
      />
      <div>
        <h2>{name}</h2>
      </div>
      {addOrRemove === "add" ? (
        <div>
          {["S", "M", "L"].map((size, index) => (
            <button
              key={index}
              type="button"
              onClick={() => addOrder(id, size)}
            >
              {size} {formatMoney(calculatePizzaPrice(price, size))}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>{formatMoney(calculatePizzaPrice(price, pizzaSize))}</p>
        </div>
      )}
    </MenuItem>
  );
};

PizzaItem.propTypes = {};

export default PizzaItem;
