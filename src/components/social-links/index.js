import React from "react"
import "./styles.scss"
import { ImGithub } from "react-icons/im"
import { FiInstagram } from "react-icons/fi"

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
      <a
        href="https://www.instagram.com/joecoxo"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="View my Instagram account"
      >
        <FiInstagram />
      </a>
    </div>
  )
}

export default SocialLinks
