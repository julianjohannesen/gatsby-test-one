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

    // Edit header
    'gatsby-plugin-react-helmet',
    
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

    // Enable image editing with Sharp
    'gatsby-plugin-sharp',
    
    // Enable processing of markdown files via Gatsby's 
    // Graphql API using Remark
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Enable processing of images with relative
          // paths
          'gatsby-remark-images-relative',
          {
            // Enable processing of images
            resolve: 'gatsby-remark-images',
            options: {
              // Enable image resizing with Sharp
              maxWidth: 900,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
