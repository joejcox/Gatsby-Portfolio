import React from "react"
// import { Link } from "gatsby"
import CF_DATA from "../../../data"
import "./styles.scss"

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      cf: CF_DATA,
      maxDisplay: props.maxDisplay,
    }
  }
  componentDidMount() {
    const contentful = require("contentful")
    const client = contentful.createClient({
      space: this.state.cf[0].space,
      accessToken: this.state.cf[0].token,
    })

    client.getEntries().then(({ items }) => {
      this.setState({ projects: items })
    })
  }

  render() {
    const { projects, maxDisplay } = this.state
    return (
      <section className="section projects">
        <div className="container">
          {projects.slice(0, maxDisplay).map(
            ({
              fields: {
                title,
                demo,
                github,
                image: {
                  fields: {
                    file: { url, description },
                  },
                },
              },
            }) => {
              return (
                <article className="project-container">
                  <header className="project-header">
                    <h3 className="project-title">{title}</h3>
                  </header>
                  <div className="project-inner">
                    <a href={demo} target="_blank">
                      <img width="100%" src={url} alt={description} />
                    </a>
                  </div>
                  <footer className="project-footer">
                    <a
                      className="button project-button"
                      href={demo}
                      target="_blank"
                    >
                      View Demo
                    </a>
                    {github ? (
                      <a
                        className="button project-button"
                        href={github}
                        target="_blank"
                      >
                        Github
                      </a>
                    ) : null}
                  </footer>
                </article>
              )
            }
          )}
        </div>
      </section>
    )
  }
}

export default PortfolioContainer
