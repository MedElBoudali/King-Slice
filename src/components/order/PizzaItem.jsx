import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import calculatePizzaPrice from "../../utils/calculatePizzaPrice";
import formatMoney from "../../utils/formatMoney";

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  position: relative;
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
`;

const RemoveButton = styled.button`
  background: none;
  color: var(--red);
  font-size: 3rem !important;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
`;

const PizzaItem = ({
  id,
  index,
  name,
  image,
  price,
  addOrRemoveOrder,
  addOrRemove,
  pizzaSize = 1,
}) => {
  const addOrder = (id, size) => {
    addOrRemoveOrder({ id, size });
  };

  return (
    <MenuItem>
      <GatsbyImage image={getImage(image.asset)} alt={name} />
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        {addOrRemove === "add" ? (
          ["S", "M", "L"].map((size, index) => (
            <button
              key={index}
              type="button"
              onClick={() => addOrder(id, size)}
            >
              {size} {formatMoney(calculatePizzaPrice(price, size))}
            </button>
          ))
        ) : (
          <>
            <p>{formatMoney(calculatePizzaPrice(price, pizzaSize))}</p>
            <RemoveButton
              type="button"
              onClick={() => addOrRemoveOrder(index)}
              title={`Remove ${name}`}
            >
              &times;
            </RemoveButton>
          </>
        )}
      </div>
    </MenuItem>
  );
};

PizzaItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  addOrRemoveOrder: PropTypes.func.isRequired,
  addOrRemove: PropTypes.string.isRequired,
  pizzaSize: PropTypes.number,
};

export default PizzaItem;
