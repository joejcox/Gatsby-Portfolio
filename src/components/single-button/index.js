import React from "react"
import "./styles.scss"

const SingleButton = ({ children }) => {
  return (
    <section className="section single-button">
      <div className="container">{children}</div>
    </section>
  )
}

export default SingleButton
