import React from "react"
import { Link } from "gatsby"
import SocialLinks from "components/social-links/index"
import "./styles.scss"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <SocialLinks />
        <span>
          ©{" "}
          <Link to="/" rel="preload">
            Joseph Cox
          </Link>{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
