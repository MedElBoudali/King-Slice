import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const SinglePizzaPage = props => {
  console.log(props);
  return (
    <div>
      <GatsbyImage
        image={getImage(props.data.sanityPizza.image.asset)}
        alt={props.data.sanityPizza.name}
      />
    </div>
  );
};

export default SinglePizzaPage;

export const query = graphql`
  query($slug: String!) {
    sanityPizza(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          gatsbyImageData(width: 800, placeholder: BLURRED)
        }
      }
      toppings {
        id
        name
        vegetarian
      }
    }
  }
`;
