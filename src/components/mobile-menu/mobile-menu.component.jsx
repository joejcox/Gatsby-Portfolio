import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SocialLinks from "components/social-links/index"
import "./mobile-menu.styles.scss"

const MobileMenu = ({ isOpen }) => {
  return (
    <article className={`mobile-menu ${isOpen === true ? "open" : ""}`}>
      <section
        className={`mobile-menu--container  ${isOpen === true ? "open" : ""}`}
      >
        <header className="mobile-menu--header">
          <h3 className="mobile-menu--logo">Joseph Cox</h3>
        </header>
        <nav className="mobile-menu--navigation">
          <AniLink cover duration="0.8" to="/">
            Home
          </AniLink>
          <AniLink cover duration="0.8" to="/about/">
            About Me
          </AniLink>
          <AniLink cover duration="0.8" to="/portfolio/">
            Portfolio
          </AniLink>
        </nav>
        <footer className="mobile-menu--footer">
          <SocialLinks />
        </footer>
      </section>
    </article>
  )
}

export default MobileMenu
