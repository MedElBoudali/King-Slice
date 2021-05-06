import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SEO from "../components/common/SEO";
import PropTypes from "prop-types";

const SliceKingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
  align-items: center;
  img {
    height: 500px;
    width: 500px;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
  h2 {
    transform: rotate(-3deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -4rem;
    z-index: 2;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
`;

const SliceKing = ({
  data: {
    sliceking: {
      name,
      description,
      image: { asset },
      slug: { current },
    },
  },
}) => {
  return (
    <>
      <SEO
        title={name}
        description={description}
        image={`${asset.url}?h=292&w=560&&fit=crop`}
        location={`${process.env.GATSBY_GRAPHQL_BASE}/sliceking/${current}/`}
      />
      <SliceKingWrapper>
        <h2>
          <span className="mark">{name}</span>
        </h2>
        <GatsbyImage image={getImage(asset)} alt={name} />
        <p className="description">{description}</p>
      </SliceKingWrapper>
    </>
  );
};

SliceKing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SliceKing;

export const query = graphql`
  query($slug: String!) {
    sliceking: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      description
      image {
        asset {
          gatsbyImageData(width: 800, placeholder: BLURRED)
          url
        }
      }
      slug {
        current
      }
    }
  }
`;
