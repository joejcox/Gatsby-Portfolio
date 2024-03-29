import React from "react"
import { Link } from "gatsby"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import PortfolioContainer from "components/portfolio-container/index"
import SingleButton from "components/single-button/index"
import "../assets/styles/home.scss"
import bannerImage from "src/assets/images/home-banner-opt.jpg"
import mobileImage from "src/assets/images/share-image.jpg"

const Home = () => {
  return (
    <Layout
      title="Joseph Cox - Frontend Developer | Typescript, React, Redux, Firebase"
      description="Frontend JavaScript developer builting Single Page Applications using React and Redux"
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
            Web developer with a passion for fast, dynamic, single page
            applications.
            <br />
            <b>Tech used:</b> Typescript, React/Gatsby/Next, Redux, Firebase
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
        <PortfolioContainer maxDisplay="6" />
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
