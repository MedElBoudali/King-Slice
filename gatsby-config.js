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

module.exports = {
  siteMetadata: {
    title: `King Slices`,
    description: `The best pizza place in Hamilton!`,
    siteUrl: "https://gatsby.pizza",
    author: `@KingSlices`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
  ],
};
