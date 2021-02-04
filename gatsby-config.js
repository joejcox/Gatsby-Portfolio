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
    siteUrl: `https://www.joecoxdev.com`,
    title: `Joseph Cox - UK Website Developer | Bespoke websites with content included`,
    description: `A UK website developer providing bespoke websites with content writing for your needs. I deliver fast, optimised ecommerce websites, blog website design, real estate web design and quality content writing at the same time.`,
    image: "/src/assets/images/home-banner-opt.jpg",
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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.joecoxdev.com",
        sitemap: "https://www.joecoxdev.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
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
