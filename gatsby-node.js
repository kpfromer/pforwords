const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-source")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // create blog posts pages from /content/blog
  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`)
  const result = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/blog/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                blogPath
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    const { slug, blogPath } = post.node.fields

    createPage({
      path: blogPath,
      component: blogPost,
      context: {
        id: post.node.id,
        slug,
        blogPath,
        previous,
        next,
      },
    })
  })

  // create mdx pages from /content/pages
  const pageTemplate = path.resolve(`./src/templates/Page.tsx`)
  const resultPage = await graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/content/pages/" } }) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (resultPage.errors) {
    throw resultPage.errors
  }

  // Create blog posts pages.
  const pages = resultPage.data.allMdx.edges

  pages.forEach(post => {
    const { slug } = post.node.fields

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        id: post.node.id,
        slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      name: `blogPath`,
      node,
      value: `/blog${value}`,
    })
  }
  fmImagesToRelative(node)
}
