import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/common/SEO";
import styled from "styled-components";
import PropTypes from "prop-types";

const SinglePizzaPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
    margin-right: 3rem;
    border-radius: 10px;
  }
  ul {
    margin-top: 3rem;
  }
`;

const SinglePizzaPage = ({
  data: {
    sanityPizza: {
      name,
      image: { asset },
      toppings,
      slug: { current },
    },
  },
}) => {
  return (
    <>
      <SEO
        title={name}
        image={`${asset.url}?h=292&w=560&&fit=crop`}
        location={`${process.env.GATSBY_GRAPHQL_BASE}/pizza/${current}/`}
      />
      <SinglePizzaPageWrapper>
        <GatsbyImage image={getImage(asset)} alt={name} />
        <div>
          <h2 className="mark">{name}</h2>
          <ul>
            {toppings.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </SinglePizzaPageWrapper>
    </>
  );
};

SinglePizzaPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SinglePizzaPage;

export const query = graphql`
  query($slug: String!) {
    sanityPizza(slug: { current: { eq: $slug } }) {
      name
      image {
        asset {
          gatsbyImageData(width: 800, placeholder: BLURRED)
          url
        }
      }
      toppings {
        id
        name
        vegetarian
      }
      slug {
        current
      }
    }
  }
`;
