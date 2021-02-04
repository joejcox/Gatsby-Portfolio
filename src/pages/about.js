import React from "react"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import bannerImage from "src/assets/images/about-banner-opt1.jpg"

const About = () => {
  return (
    <Layout
      title="About | Joseph Cox - Bespoke eCommerce Website Development"
      description="Looking for a professional website developer for your new business? We provide a high quality, speed optimised fully responsive website design. Optimised website design with content writing"
    >
      <ImageBlock
        image={bannerImage}
        alt="Laptop showing music production software"
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
          I develop dynamic websites using React JS and React based frameworks
          such as Gatsby and Next JS. I provide fully bespoke website
          development including blog website design, eCommerce website
          development and takeaway websites.
        </p>

        {/* place icons of these in the white space beneath the banner instead eventually */}
        <p>
          <strong>Tools/skills:</strong> HTML, CSS/SCSS, JavaScript, React,
          Gatsby, Next, Git, WordPress, Shopify, some PHP, Figma, Adobe XD,
          Photoshop, Illustrator
        </p>
      </ImageBlock>
    </Layout>
  )
}

export default About
