import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavLinks = () => {
  return (
    <>
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
        to="/projects"
        className="nav-link"
        activeClassName="active"
      >
        Portfolio
      </AniLink>
      <a
        className="nav-link"
        href="mailto:joecoxwebdev@outlook.com?subject=Contact from your website"
      >
        Contact
      </a>
    </>
  )
}

export default NavLinks
