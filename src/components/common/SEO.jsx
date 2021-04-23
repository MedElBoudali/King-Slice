import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const SEO = ({ title, image, description, children, location }) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        defaultImage,
        siteUrl,
        twitter,
      },
    },
  } = useStaticQuery(query);
  return (
    <Helmet title={title ?? defaultTitle} titleTemplate={titleTemplate}>
      <html lang="en" />
      <link
        rel="shortcut icon"
        href="/static/favicon.svg"
        type="image/svg+xml"
      />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta name="twitter:title" content={title ?? defaultTitle} />
      <meta name="description" content={description ?? defaultDescription} />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
      />
      <meta
        name="twitter:description"
        content={description ?? defaultDescription}
      />
      <meta name="image" content={image ?? defaultImage} />
      <meta property="og:image" content={image ?? defaultImage} />
      <meta name="twitter:image" content={image ?? defaultImage} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitter && <meta name="twitter:creator" content={twitter} />}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultImage: image
        siteUrl
        twitter
      }
    }
  }
`;
