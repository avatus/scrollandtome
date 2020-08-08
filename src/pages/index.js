import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const Post = post => {
    const { frontmatter, excerpt } = post.node
    return (
      <div
          style={{marginBottom: "2rem"}}
          key={frontmatter.path}
      >
        <Link
          to={frontmatter.path}
        >
            <h3 style={{marginBottom: "0px"}}>{frontmatter.title}</h3>
            <span style={{color: "#666", fontSize: "16px", marginBottom: "0.5rem"}}>{frontmatter.date_formatted}</span>
            <p>{excerpt} <span style={{color: 'cornflowerblue'}}>read more →</span></p>
        </Link>

      </div>
    )
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      <h2 style={{fontSize: "16px", marginBottom: "3rem"}}>Eldritch musings and arcane intellects from the spiraling minds of two would-be wizards.</h2>
      {data.allMarkdownRemark.edges.map(Post)}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit:20, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt(pruneLength: 280)
          frontmatter {
            title
            path
            date
            date_formatted
          }
        }
      }
    }
  }
`

export default IndexPage
