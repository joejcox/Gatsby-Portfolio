import React from "react"
import Layout from "components/layout/index"
import PageTitle from "components/page-title/index"
import ImageBlock from "components/ImageBlock/index"

const About = () => {
  return (
    <Layout title="About | Joseph Cox - eCommerce Website Development">
      <PageTitle>About Me</PageTitle>
      <ImageBlock>
        <p className="dark-text">
          My coding journey began with Myspace layouts, where code would be
          uploaded for others to use on their profiles. This was the first step
          on the path for knowledge in HTML, CSS/SCSS and JavaScript. Keeping up
          with JavaScript libraries such as jQuery, React, gsap and CSS
          frameworks such as Bootstrap and Bulma.
        </p>

        <p className="dark-text">
          I develop dynamic websites using React JS. From blogs, to eCommerce
          stores, fully bespoke websites are what I do.
        </p>
      </ImageBlock>
    </Layout>
  )
}

export default About
