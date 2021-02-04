import React, { useState, useEffect } from "react"
import "./styles.scss"

const PortfolioContainer = ({ maxDisplay }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const contentful = require("contentful")
    const client = contentful.createClient({
      space: process.env.GATSBY_ENV_CONTENTFUL_SPACE_ID,
      accessToken: process.env.GATSBY_ENV_CONTENTFUL_ACCESS_TOKEN,
    })

    client.getEntries().then(({ items }) => {
      setProjects(items)
    })

    setLoading(false)
  }, [])

  const getProjects = () => {
    const list = projects.slice(0, maxDisplay).map(
      ({
        sys: { id },
        fields: {
          title,
          demo,
          github,
          image: {
            fields: {
              description,
              file: { url },
            },
          },
        },
      }) => {
        return (
          <article key={id} className="project-container">
            <header className="project-header">
              <h2 className="project-title">{title}</h2>
            </header>
            <div className="project-inner">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img width="100%" height="200" src={url} alt={description} />
              </a>
            </div>
            <footer className="project-footer">
              <a
                className="button project-button"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
              {github ? (
                <a
                  className="button project-button"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              ) : null}
            </footer>
          </article>
        )
      }
    )
    return list
  }
  return (
    <section className="section projects">
      <div className="container">
        {loading ? <p>Loading projects...</p> : getProjects()}
      </div>
    </section>
  )
}

export default PortfolioContainer

// class PortfolioContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       projects: [],
//       maxDisplay: this.props.maxDisplay,
//     }
//   }
//   componentDidMount() {
//     const contentful = require("contentful")
//     const client = contentful.createClient({
//       space: process.env.GATSBY_ENV_CONTENTFUL_SPACE_ID,
//       accessToken: process.env.GATSBY_ENV_CONTENTFUL_ACCESS_TOKEN,
//     })

//     client.getEntries().then(({ items }) => {
//       this.setState({ projects: items })
//     })
//   }

//   render() {
//     const { projects, maxDisplay } = this.state

//     return (
//       <section className="section projects">
//         <div className="container">
//           {projects.slice(0, maxDisplay).map(
//             ({
//               sys: { id },
//               fields: {
//                 title,
//                 demo,
//                 github,
//                 image: {
//                   fields: {
//                     description,
//                     file: { url },
//                   },
//                 },
//               },
//             }) => {
//               return (
//                 <article key={id} className="project-container">
//                   <header className="project-header">
//                     <h2 className="project-title">{title}</h2>
//                   </header>
//                   <div className="project-inner">
//                     <a href={demo} target="_blank" rel="noreferrer">
//                       <img width="100%" src={url} alt={description} />
//                     </a>
//                   </div>
//                   <footer className="project-footer">
//                     <a
//                       className="button project-button"
//                       href={demo}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Visit
//                     </a>
//                     {github ? (
//                       <a
//                         className="button project-button"
//                         href={github}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         Github
//                       </a>
//                     ) : null}
//                   </footer>
//                 </article>
//               )
//             }
//           )}
//         </div>
//       </section>
//     )
//   }
// }

// export default PortfolioContainer
