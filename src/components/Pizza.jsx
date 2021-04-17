import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const Pizza = ({ pizza }) => {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map(topping => topping.name).join(", ")}</p>
      </Link>
      {pizza.image && (
        <GatsbyImage image={getImage(pizza.image.asset)} alt={pizza.name} />
      )}
    </div>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Pizza;
