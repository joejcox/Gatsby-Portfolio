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
