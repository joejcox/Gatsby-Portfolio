import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import PortfolioContainer from "components/portfolio-container/index"
import SingleButton from "components/single-button/index"
import "../assets/styles/home.scss"
import bannerImage from "images/home-banner-opt.jpg"

const Home = () => {
  return (
    <Layout title="Joseph Cox - Website Developer">
      <main className="content home-content">
        <ImageBlock
          image={bannerImage}
          altText="Laptop showing web developer code"
          hasFilter
        >
          <h1 className="page-title">Frontend Developer</h1>
          <p>
            I'm a web developer with a passion for building fast, dynamic
            websites
          </p>
          <AniLink cover duration="0.8" to="/portfolio" className="button">
            View Work
          </AniLink>
        </ImageBlock>
        <PortfolioContainer maxDisplay="3" />
        <SingleButton>
          <AniLink cover duration="0.8" to="/portfolio" className="button">
            View All
          </AniLink>
        </SingleButton>
      </main>
    </Layout>
  )
}

export default Home
