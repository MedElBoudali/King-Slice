// import dotenv from "dotenv";
// dotenv.config({ path: ".env" });

// module.exports = {
//   pathPrefix: "/pizza",
//   siteMetadata: {
//     title: `Slicks Slices`,
//     siteUrl: "https://gatsby.pizza",
//     description: "The best pizza place in Hamilton!",
//     twitter: "@slicksSlices",
//   },
//   plugins: [
//     "gatsby-plugin-react-helmet",
//     "gatsby-plugin-styled-components",
//     "gatsby-plugin-image",
//     // {
//     //   // this is the name of the plugin you are adding
//     //   resolve: "gatsby-source-sanity",
//     //   options: {
//     //     projectId: "0jfvvkkd",
//     //     dataset: "production",
//     //     watchMode: true,
//     //     token: process.env.SANITY_TOKEN,
//     //   },
//     // },
//   ],
// };

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "King Slices",
    siteUrl: "https://gatsby.pizza",
    description: "The best pizza place in Hamilton!",
    author: "@moelboudali",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
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
