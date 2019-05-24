// Use Node's path API
const path = require('path')

// The idea here is to create a slug from the file name.
// I'll also create a node field so I can access the 
// slug.
// See the Gatsby API reference to learn more about
// onCreateNode
module.exports.onCreateNode = ({ node, actions }) => {
    // Destructure to get createNodeField froms the actions
    // object
    const { createNode, createNodeField } = actions
    
    // For any post with a internal type of MarkdownRemark...
    if(node.internal.type === 'MarkdownRemark') {
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