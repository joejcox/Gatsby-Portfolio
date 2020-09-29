/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.GATSBY_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Joseph Cox - UK Web Developer`,
    description: `UK Web developer who can build your eCommerce website, blog or simple informational website.`,
    author: `Joseph Cox`,
    menuLinks: [
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-env-variables`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.joecoxdev.com",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        images: path.join(__dirname, "src/assets/images"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
