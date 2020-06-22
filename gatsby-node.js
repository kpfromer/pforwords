const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
  const posts = result.data.allWordpressPost.edges
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`)
  //   // Create blog posts pages.
  posts.forEach((post, index) => {
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node
    // const { id } = post.node.id
    createPage({
      path: `/blog/${post.node.slug}`,
      component: blogPost,
      context: {
        id: post.node.id,
      },
    })
  })
}
