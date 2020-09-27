import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/header/index"
import Footer from "components/footer/index"
import Instagram from "components/instagram/index"
import "../../assets/styles/global.scss"
import "./styles.scss"

const Layout = ({ children, title }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div className="wrapper-top">
        <Header />
        {children}
        <Instagram />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
