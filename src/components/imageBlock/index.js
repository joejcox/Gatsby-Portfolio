import React from "react"
import "./styles.scss"

const ImageBlock = ({
  image,
  altText,
  hasFilter,
  isRight,
  fillSpace,
  children,
}) => {
  return (
    <section
      className={`section image-block is-large ${
        fillSpace ? "fill-space" : ""
      }`}
    >
      {image ? (
        <img className="overlay-image" src={image} alt={altText} />
      ) : null}
      {hasFilter ? (
        <div
          className="overlay-filter"
          style={{ backgroundColor: `rgba(25, 25, 180,${hasFilter})` }}
        ></div>
      ) : null}
      <div className="container">
        <article
          className={`section--half-block text-white ${
            isRight ? "block-right" : ""
          }`}
        >
          {children}
        </article>
      </div>
    </section>
  )
}

export default ImageBlock
