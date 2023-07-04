module.exports = {
  siteMetadata: {
    title: `Portfolio | Gert`,
    description: `Portfolio website by Gert`,
    twitterUsername: `@gert`,
    image: `images/favicon.png`,
    siteUrl: `https://gertadamson.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-dark-mode`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `images/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `images/favicon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
        ]
      },
        resolve: 'gatsby-plugin-module-resolver',
        options: {
          root: './src',
          aliases: {
            'components': './components',
            'containers': './containers',
            'data': './data',
            'themes': './themes',
            static: {
              root: './public',
              alias: './static'
            }
          }
        }
      },
      'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
