import React from "react"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import bannerImage from "src/assets/images/about-banner-opt.jpg"

const About = () => {
  return (
    <Layout title="About | Joseph Cox - eCommerce Website Development">
      <ImageBlock
        image={bannerImage}
        alt="Laptop showing music production software"
        fillSpace
        hasFilter
      >
        <h1 className="page-title">About Me</h1>
        <p>
          My coding journey began with Myspace layouts, where code would be
          uploaded for others to use on their profiles. This was the first step
          on the path for knowledge in HTML, CSS/SCSS and JavaScript. Keeping up
          with JavaScript libraries such as jQuery, React, gsap and CSS
          frameworks such as Bootstrap and Bulma.
        </p>

        <p>
          I develop dynamic websites using React JS. From blogs, to eCommerce
          stores, fully bespoke websites are what I do.
        </p>

        <p>
          <strong>Skills:</strong> HTML, CSS/SCSS, JavaScript, React, Gatsby,
          Next, Git, PHP, Photoshop
        </p>
      </ImageBlock>
    </Layout>
  )
}

export default About
