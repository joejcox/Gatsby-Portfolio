import React from "react"
import { Link } from "gatsby"
import Layout from "components/layout/index"
import ImageBlock from "components/imageBlock/index"
import "../assets/styles/home.scss"
import bannerImage from "images/home-banner.jpg"
import CF_DATA from "../../data"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      fields: [],
      cf: CF_DATA,
    }
  }
  componentDidMount() {
    console.log(this.state.cf[0].space)
    const contentful = require("contentful")
    const client = contentful.createClient({
      space: this.state.cf[0].space,
      accessToken: this.state.cf[0].token,
    })

    client.getEntries().then(({ items }) => {
      this.setState({ fields: items })
    })
  }

  render() {
    return (
      <Layout>
        <main className="content home-content">
          <ImageBlock image={bannerImage} altText="Large Lake" hasFilter>
            <h1 className="page-title">Frontend Developer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              erat ut enim blandit iaculis. Phasellus tristique diam lectus, in
              viverra libero consectetur id. Nunc rutrum ipsum non urna
              tincidunt consectetur. In vulputate quam sit amet hendrerit
              suscipit. Suspendisse ac est erat. Pellentesque dignissim, metus
              nec elementum eleifend, odio neque tincidunt quam, sed dapibus
              risus urna id neque. Integer tristique suscipit ex vel lobortis.
            </p>
            <Link to="/projects" className="button">
              View Work
            </Link>
          </ImageBlock>
          <section className="section projects">
            <div className="container">
              {this.state.fields.map(
                ({
                  fields: {
                    title,
                    description,
                    image: { fields },
                  },
                }) => {
                  return (
                    <article className="project-container">
                      <h2 className="project-title">{title}</h2>
                      <p className="project-description">{description}</p>
                      <div className="project-inner">
                        <img
                          width="100%"
                          src={fields.file.url}
                          alt={fields.file.description}
                        />
                      </div>
                    </article>
                  )
                }
              )}
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default Home
