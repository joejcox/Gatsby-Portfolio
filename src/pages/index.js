import React from "react"
import { Link } from "gatsby"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import PortfolioContainer from "components/portfolio-container/index"
import SingleButton from "components/single-button/index"
import "../assets/styles/home.scss"
import bannerImage from "images/home-banner.jpg"

const Home = () => {
  return (
    <Layout>
      <main className="content home-content">
        <ImageBlock image={bannerImage} altText="Large Lake" hasFilter>
          <h1 className="page-title">Frontend Developer</h1>
          <p>
            I'm a web developer with a passion for building fast, dynamic
            websites
          </p>
          <Link to="/portfolio" className="button">
            View Work
          </Link>
        </ImageBlock>
        <PortfolioContainer maxDisplay="3" />
        <SingleButton>
          <Link to="/portfolio" className="button">
            View All
          </Link>
        </SingleButton>
      </main>
    </Layout>
  )
}

export default Home
