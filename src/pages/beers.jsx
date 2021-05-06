import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Seo from "../components/common/SEO";
import PropTypes from "prop-types";

const BeersWrapper = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 3rem;
`;

const BeerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
  border: 1px solid var(--grey);
  justify-content: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;

const Beers = ({
  data: {
    allBeer: { nodes: beers },
  },
}) => (
  <>
    <Seo
      title="Beers"
      image={beers[0].image}
      description="available beers."
      location={`${process.env.GATSBY_GRAPHQL_BASE}/beers/`}
    />
    <h2 className="center">We have {beers.length} beers available</h2>
    <BeersWrapper>
      {beers.map(({ id, name, image, price, rating: { reviews, average } }) => {
        const rating = Math.round(average);
        return (
          <BeerWrapper key={id}>
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
          </BeerWrapper>
        );
      })}
    </BeersWrapper>
  </>
);

Beers.propTypes = {
  data: PropTypes.object.isRequired,
};

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
