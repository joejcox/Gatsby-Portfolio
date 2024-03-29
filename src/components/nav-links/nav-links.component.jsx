import React from "react"
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="nav-link" activeClassName="active" rel="preload">
        Home
      </Link>
      <Link
        to="/projects"
        className="nav-link"
        activeClassName="active"
        rel="preload"
      >
        Portfolio
      </Link>
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
