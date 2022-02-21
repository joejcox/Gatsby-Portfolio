import React from "react"
import "./styles.scss"
import { ImGithub } from "react-icons/im"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.github.com/joejcox"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="View my github account"
      >
        <ImGithub />
      </a>
    </div>
  )
}

export default SocialLinks
