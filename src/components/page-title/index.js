import React from "react"

const PageTitle = ({ children }) => {
  return (
    <section className="section page-title-section">
      <div className="container">
        <h1 className="page-title">{children}</h1>
      </div>
    </section>
  )
}

export default PageTitle
