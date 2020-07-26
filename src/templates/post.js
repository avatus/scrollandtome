import React from 'react'
// import Helmet from 'react-helmet'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
    data,
    pageContext
}) {
    const { next, prev } = pageContext
    const { markdownRemark: post } = data
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <h1 style={{fontSize: "1.5rem", marginBottom: "0px"}}>{post.frontmatter.title}</h1>
            <p style={{color: "#666"}}>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }} 
            >
                <div>
                    {next &&
                        <Link className="prevnext" to={next.frontmatter.path}>{`← ${next.frontmatter.title}`}</Link>
                    }
                </div>
                <div style={{maxWidth: 250}}>
                    {prev &&
                        <Link className="prevnext" to={prev.frontmatter.path}>{`${prev.frontmatter.title} →`}</Link>
                    }
                </div>
            </div>
            <div style={{
                width: "100%",
                textAlign: 'center',
                marginTop: "3rem",
                marginBottom: "3rem"

            }}>
                <Link style={{
                    color: "#666",
                    margin: "auto",
                    textAlign: 'center',
                }} to="/">Return to index</Link>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path}}) {
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`