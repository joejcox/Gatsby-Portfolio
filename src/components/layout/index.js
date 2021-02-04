import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/header/index"
import Footer from "components/footer/index"
import "../../assets/styles/global.scss"
import "./styles.scss"

const Layout = ({ children, title, description }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap&family=Patua+One&display=swap"
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
