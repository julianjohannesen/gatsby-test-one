// Use Node's path API
const path = require('path')

// The idea here is to create a slug from the file name.
// I'll also create a node field so I can access slugs.
// I'll use these in my blog pages.
// See the Gatsby API reference for onCreateNode
module.exports.onCreateNode = ({ node, actions }) => {
    // Destructure to get createNodeField froms the actions
    // object
    const { createNode, createNodeField } = actions

    // For any post with a internal type of MarkdownRemark...
    if (node.internal.type === 'MarkdownRemark') {
        // Create a slug using the basename and stripping 
        // away the file type suffix
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // Check out the contents of the node
        //console.log(JSON.stringify(node, undefined, 4))
        // Check out the contents of the slug
        //console.log('@@@@@@@@@@@@', slug)

        // Create a node field with node, name, and value 
        // properties. The field will be accessible by
        // Graphql.
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// The idea here is to create a new page for each blog post
// See the Gatsby API reference for createPages
module.exports.createPages = ({ graphql, actions }) => {
    // Destructure actions to pull out createPage
    const { createPage } = actions
    
    // Get the path to the blog template
    const blogTemplate = path.resolve(`src/templates/blog.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog post pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
            createPage({
                // Path for this page — required
                path: `/blog/${edge.node.fields.slug}`,
                component: blogTemplate,
                context: {
                    // Add optional context data to be inserted
                    // as props into the page component..
                    //
                    // The context data can also be used as
                    // arguments to the page GraphQL query.
                    //
                    // The page "path" is always available as a GraphQL
                    // argument.
                    slug: edge.node.fields.slug
                },
            })
        })
    })
}