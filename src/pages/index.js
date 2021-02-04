import React from "react"
import { Link } from "gatsby"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import PortfolioContainer from "components/portfolio-container/index"
import SingleButton from "components/single-button/index"
import "../assets/styles/home.scss"
import bannerImage from "images/home-banner-opt.jpg"
import mobileImage from "images/share-image.jpg"

const Home = () => {
  return (
    <Layout
      title="Joseph Cox - Website Developer UK | Bespoke web designer"
      description="A UK website developer providing bespoke websites with content writing for your needs. I deliver fast, optimised ecommerce websites, blog website design, real estate web design and quality content writing at the same time."
    >
      <main className="content home-content" role="main">
        <ImageBlock
          image={bannerImage}
          mobile={mobileImage}
          altText="Laptop showing web developer code"
          hasFilter
        >
          <h1 className="page-title">Frontend Developer</h1>
          <p>
            I'm a web developer with a passion for building fast, dynamic
            websites
          </p>
          <Link to="/projects" className="button" rel="preload">
            View Work
          </Link>
          <a
            href="https://github.com/joejcox/Gatsby-Portfolio"
            className="button portfolio-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio Repo
          </a>
        </ImageBlock>
        <PortfolioContainer maxDisplay="3" />
        <SingleButton>
          <Link to="/projects" className="button" rel="preload">
            View All
          </Link>
        </SingleButton>
      </main>
    </Layout>
  )
}

export default Home
