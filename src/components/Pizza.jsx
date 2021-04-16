import React from "react";
import PropTypes from "prop-types";

const Pizza = ({ pizza }) => {
  return (
    <div>
      Pizza Name: {pizza.name}
      {pizza.image && (
        <img
          src={pizza.image.asset.gatsbyImageData.images.fallback.src}
          srcset={pizza.image.asset.gatsbyImageData.images.fallback.srcSet}
          alt={pizza.name}
        />
      )}
    </div>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Pizza;
