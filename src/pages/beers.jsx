import { graphql } from "gatsby";
import React from "react";

const Beers = ({
  data: {
    allBeer: { nodes: beers },
  },
}) => (
  <>
    <h2 className="center">We have {beers.length} beers available</h2>
    {beers.map(({ id, name, image, price, rating: { reviews, average } }) => {
      const rating = Math.round(average);
      return (
        <div key={id}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          {price}
          <p title={`${rating} of 5 stars.`}>
            {`⭐`.repeat(rating)}
            <span style={{ filter: "grayscale(100%)" }}>
              {"⭐".repeat(5 - rating)}
            </span>
            <span>({reviews})</span>
          </p>
        </div>
      );
    })}
  </>
);

export default Beers;

export const query = graphql`
  query {
    allBeer {
      nodes {
        id
        name
        image
        price
        rating {
          reviews
          average
        }
      }
    }
  }
`;
