module.exports = {
  siteMetadata: {
    siteUrl: `https://reiner.design`,
    title: `jeff reiner`,
    description: `frontend developer based in berlin.`,
    author: `jeff reiner <jeff@reiner.design>`
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout")
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `blue`,
        showSpinner: false
      }
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `xu43og8wrjku`,
    //     accessToken: `db03e1217182b84594c8c386e0d642bd59fbeddf6d1690efe87c1e0b6716c30b`,
    //     host: `cdn.contentful.com`
    //   }
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`
  ]
};
