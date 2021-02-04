import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/header/index"
import Footer from "components/footer/index"
import "../../assets/styles/global.scss"
import "./styles.scss"

const Layout = ({ children, title }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>{title}</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className="wrapper-top">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
