import React from "react"
import Layout from "components/layout/index"
import PageTitle from "components/page-title/index"
import PortfolioContainer from "components/portfolio-container/index"
import "../assets/styles/home.scss"

const Portfolio = () => {
  return (
    <Layout
      title="Portfolio | Joseph Cox - React Developer"
      description="Building single page applications using latest technologies such as React, Redux, Typescript and Firebase"
    >
      <main className="content portfolio-content">
        <PageTitle>Portfolio</PageTitle>
        <PortfolioContainer />
      </main>
    </Layout>
  )
}

export default Portfolio
