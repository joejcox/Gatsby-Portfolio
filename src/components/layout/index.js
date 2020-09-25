import React from "react"
import Header from "components/header/index"
import Footer from "components/footer/index"
import "../../assets/styles/global.scss"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
