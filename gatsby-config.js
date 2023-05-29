/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/hypnotize",
  siteMetadata: {
    title: `Hypnotize`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "2c3f588370ab8847012de07d19b7b6",
        // apiToken: process.env.DATOCMS_API_TOKEN,
        environment: process.env.DATOCMS_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-netlify`,
  ]
};