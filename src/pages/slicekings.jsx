import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const SliceKingsWrapper = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .gatsby-image-wrapper {
    height: 400px;
    object-fit: fill;
  }
`;

const SliceKingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -3rem;
    position: relative;
    z-index: 2;
  }
  p {
    font-size: 1.5rem;
    background: var(--yellow);
    margin: -3rem 2rem 0 2rem;
    z-index: 2;
    transform: rotate(2deg);
    padding: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  a {
    text-decoration: none;
  }
`;

const Slicekings = ({
  data: {
    sliceKings: { nodes, totalCount },
  },
}) => {
  return (
    <SliceKingsWrapper>
      {nodes.map(({ id, name, description, slug, image }) => (
        <SliceKingWrapper key={id}>
          <Link to={`/sliceking/${slug.current}`}>
            <h2>
              <span className="mark">{name}</span>
            </h2>
          </Link>
          <GatsbyImage image={getImage(image.asset)} />
          <p className="description">{description}</p>
        </SliceKingWrapper>
      ))}
    </SliceKingsWrapper>
  );
};

export default Slicekings;

export const query = graphql`
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
        image {
          asset {
            gatsbyImageData(width: 410, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
