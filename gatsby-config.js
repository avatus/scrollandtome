module.exports = {
  siteMetadata: {
    title: `Scroll and Tome`,
    description: `Arcane intellects and eldritch musings on tabletop roleplaying games.`,
    author: `@michaelzmyers`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: "UA-174250715-1",
        anonymize: true,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 2,
        prependToBody: false,
        color: `#29b6f6`,
        footerHeight: 50,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.gif`,
      },
    },
    `gatsby-transformer-remark`
    // `gatsby-plugin-offline`,
  ],
}
