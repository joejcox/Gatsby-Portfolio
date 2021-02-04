import React from "react"
import Layout from "components/layout/index"
import PageTitle from "components/page-title/index"
import PortfolioContainer from "components/portfolio-container/index"
import "../assets/styles/home.scss"

const Portfolio = () => {
  return (
    <Layout
      title="Portfolio | Joseph Cox - Bespoke Websites UK"
      description="React JS website portfolio, UK website designer, fast optimised websites"
    >
      <main className="content portfolio-content">
        <PageTitle>Portfolio</PageTitle>
        <PortfolioContainer />
      </main>
    </Layout>
  )
}

export default Portfolio
