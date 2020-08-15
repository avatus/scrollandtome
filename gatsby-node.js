const path = require('path')

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    const postTempalte = path.resolve('src/templates/post.js')

    return graphql(`{
        allMarkdownRemark(
            sort: {order: ASC, fields: [frontmatter___date]}
        ) {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                        date
                        date_formatted
                        author
                    }
                }
            }
        }
    }`)
    .then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({node}, index) => {
            createPage({
                path: node.frontmatter.path,
                component: postTempalte,
                context: {
                    pathSlug: node.frontmatter.path,
                    prev: index === 0 ? null : posts[index-1].node,
                    next: index === (posts.length-1) ? null : posts[index+1].node
                }
            })
        })
    })
}