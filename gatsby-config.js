require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "King Slices",
    titleTemplate: "%s · King Slices",
    description: "The best pizza place in Hamilton!",
    image: "/static/thumbnail.jpg",
    siteUrl: "https://gatsby.pizza",
    twitter: "@moelboudali",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `82y8hbpf`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
