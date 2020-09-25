import React from "react"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import bannerImage from "../assets/images/about-banner.jpg"

const About = () => {
  return (
    <Layout>
      <ImageBlock image={bannerImage} altText="Large Lake" hasFilter isRight>
        <h1 className="page-title">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut erat
          ut enim blandit iaculis. Phasellus tristique diam lectus, in viverra
          libero consectetur id. Nunc rutrum ipsum non urna tincidunt
          consectetur. In vulputate quam sit amet hendrerit suscipit.
          Suspendisse ac est erat. Pellentesque dignissim, metus nec elementum
          eleifend, odio neque tincidunt quam, sed dapibus risus urna id neque.
          Integer tristique suscipit ex vel lobortis.
        </p>
      </ImageBlock>
    </Layout>
  )
}

export default About
