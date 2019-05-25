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

    // Enable the manifest plugin
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },

    // Enable use of Style Components
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },

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
