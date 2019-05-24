/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 // See also config-browser and config-node
 // config-node is setup to create a new node field
 // whenever a node is created. The field contains
 // the node, node name, and node value.

module.exports = {
  
  // Set site metadata, which can be accessed via
  // Gatsby's Graphql API using useStaticQuery
  siteMetadata: {
    title: 'Julian Johannesen',
    subtitle: 'Front-End Web Developer',
    author: 'Julian Johannesen'
  },
  plugins: [
    // Enable Sass
    'gatsby-plugin-sass',
    // Enable file system access via Gatsby's Graphql API
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    // Enable processing of markdown files via Gatsby's 
    // Graphql API using Remark
    'gatsby-transformer-remark'
  ]
}
