import React from "react"
import NavLinks from "components/nav-links/nav-links.component"
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
          <NavLinks />
        </nav>
        <footer className="mobile-menu--footer">
          <SocialLinks />
        </footer>
      </section>
    </article>
  )
}

export default MobileMenu
