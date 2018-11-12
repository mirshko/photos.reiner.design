const font = {
  regular: "/lunchtype24-regular-expanded-webfont.woff2",
  medium: "/lunchtype24-medium-expanded-webfont.woff2"
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://reiner.design`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nnekhju478qa`,
        accessToken: process.env.CTF_ACCESS_TOKEN,
        host:
          process.env.CTF_USE_PREVIEW == "true"
            ? "preview.contentful.com"
            : "cdn.contentful.com"
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `magenta`,
        showSpinner: false
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          `Link: <${
            font.regular
          }>; rel=preload; as=font; crossorigin=crossorigin; nopush`,
          `Link: <${
            font.medium
          }>; rel=preload; as=font; crossorigin=crossorigin; nopush`
        ]
      }
    }
  ]
};
