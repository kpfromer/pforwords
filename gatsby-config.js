module.exports = {
  siteMetadata: {
    siteUrl: "http://pforwords.surge.sh",
    title: "pforwords",
    description: "Sustainable living on a budget",
    author: "Taylor Pfromer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    // content library
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: "data",
      },
    },
    "gatsby-transformer-json",
    // Images/blog
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `media`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // import blog posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-remark-reading-time",
    {
      resolve: `gatsby-plugin-mdx`,

      options: {
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          "gatsby-remark-relative-source",
          // "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    // Pinterest Buttons
    {
      resolve: `gatsby-plugin-pinterest`,
      options: {
        saveButton: {
          round: false,
          tall: true,
        },
      },
    },

    // instagram
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `6665124804`,
      },
    },
    // custom mdx pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `page`,
      },
    },
  ],
}
