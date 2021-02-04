import React from "react"
import "./styles.scss"
import { ImGithub } from "react-icons/im"
import { FiInstagram } from "react-icons/fi"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.github.com/joejcox" rel="noreferrer" target="_blank">
        <ImGithub />
      </a>
      <a
        href="https://www.instagram.com/joecoxo"
        rel="noreferrer"
        target="_blank"
      >
        <FiInstagram />
      </a>
    </div>
  )
}

export default SocialLinks
