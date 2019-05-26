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

    // Enable the manifest plugin (this must appear
    // before the offline plugin)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Julian Johannesen",
        short_name: "JJ",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        theme_color_in_head: true, // If set to false, this will avoid adding theme-color meta tag.
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        include_favicon: true, // If set to false, this will exclude favicon link tag
        crossOrigin: `use-credentials`,
        cache_busting_mode: `none`, // `query`(default), `name`, or `none`
      },
    },

    // Enable offline loading with service worker
    `gatsby-plugin-offline`

    // Enable use of Styled Components
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },

    // Edit header information with Helmet
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
