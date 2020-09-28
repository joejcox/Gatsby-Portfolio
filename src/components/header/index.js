import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import NavLinks from "components/nav-links/nav-links.component"
import Hamburger from "components/hamburger/hamburger.component"
import MobileMenu from "components/mobile-menu/mobile-menu.component"
import SocialLinks from "components/social-links/index"
import "components/header/styles.scss"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
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
          <NavLinks />
        </nav>
        <SocialLinks />
        <Hamburger click={() => setOpen(!isOpen)} isOpen={isOpen} />
        <MobileMenu isOpen={isOpen} />
      </div>
    </header>
  )
}

export default Header
