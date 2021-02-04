import React from "react"
import "./hamburger.styles.scss"

const Hamburger = ({ click, isOpen }) => {
  return (
    <button
      onClick={click}
      className={`hamburger ${isOpen === false ? "" : "open"}`}
      aria-label="Mobile navigation button"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default Hamburger
