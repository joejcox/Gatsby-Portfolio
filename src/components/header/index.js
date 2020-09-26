import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SocialLinks from "components/social-links/index"
import "components/header/styles.scss"

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <h2>
            <AniLink cover bg="#ffffff" duration="0.8" to="/">
              Joseph Cox
            </AniLink>
          </h2>
        </div>
        <nav className="main-navigation">
          <AniLink
            cover
            duration="0.8"
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            Home
          </AniLink>
          <AniLink
            cover
            duration="0.8"
            to="/about"
            className="nav-link"
            activeClassName="active"
          >
            About Me
          </AniLink>
          <AniLink
            cover
            duration="0.8"
            to="/portfolio"
            className="nav-link"
            activeClassName="active"
          >
            Portfolio
          </AniLink>
        </nav>
        <SocialLinks />
      </div>
    </header>
  )
}

export default Header
