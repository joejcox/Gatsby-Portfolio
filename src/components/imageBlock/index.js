import React from "react"
import "./styles.scss"

const ImageBlock = ({
  image,
  mobile,
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
        <>
          <img className="overlay-image desktop" src={image} alt={altText} />
          <img className="overlay-image mobile" src={mobile} alt={altText} />
        </>
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
