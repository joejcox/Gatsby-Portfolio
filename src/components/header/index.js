import React from "react"
import { Link } from "gatsby"
import "components/header/styles.scss"

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <h2>
            <Link to="/">Joseph Cox</Link>
          </h2>
        </div>
        <nav className="main-navigation">
          <Link to="/" className="nav-link" activeClassName="active">
            Home
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active">
            About Me
          </Link>
          <Link to="/portfolio" className="nav-link" activeClassName="active">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
