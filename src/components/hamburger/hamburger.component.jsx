import React from "react"
import "./hamburger.styles.scss"

const Hamburger = ({ click, isOpen }) => {
  return (
    <div
      className={`hamburger ${isOpen === false ? "" : "open"}`}
      onClick={click}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger
