const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-source")

const _ = require(`lodash`)
const slash = require(`slash`)
const deepMap = require("deep-map")

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
                # categories is used below for category pages
                categories
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

  // Create categories pages

  const categoryPage = path.resolve("./src/templates/Category.tsx")
  // Get all categories as set
  const categories = new Set(
    posts.reduce(
      (prev, post) => [...prev, ...post.node.frontmatter.categories],
      []
    )
  )

  categories.forEach(category => {
    createPage({
      path: `/category/${category.toLowerCase()}`,
      component: categoryPage,
      context: {
        category,
      },
    })
  })
}

const fileNodes = []

const fmImagesToRelativeJson = node => {
  // pulled here: https://github.com/SublimateDesign/gatsby-remark-relative-source/blob/master/src/index.js
  // Save file references
  fileNodes.push(node)
  // Only process markdown files
  // console.log(node.internal.type)
  if (node.internal.type === `DataJson`) {
    // Convert paths in frontmatter to relative
    function makeRelative(value) {
      if (_.isString(value) && path.isAbsolute(value)) {
        const { base } = path.parse(value)
        // assuming json lives in /content/data
        return path.join("../images", base)

        // let imagePath
        // const foundImageNode = _.find(fileNodes, file => {
        //   if (!file.dir) return
        //   imagePath = path.join(file.dir, path.basename(value))
        //   return slash(path.normalize(file.absolutePath)) === slash(imagePath)
        // })
        // console.log(foundImageNode)
        // if (foundImageNode) {
        //   return slash(
        //     path.relative(path.join(node.fileAbsolutePath, ".."), imagePath)
        //   )
        // }
      }
      return value
    }
    // Deeply iterate through frontmatter data for absolute paths
    deepMap(node.content, makeRelative, { inPlace: true })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)
  fmImagesToRelativeJson(node)
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
}

// Add default category to blog posts
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type Mdx implements Node { frontmatter: MdxFrontmatter }",
    // `
    //   interface BottomGallery {
    //     blogName: String!
    //     image: String!
    //   }
    // `,
    // schema.buildObjectType({
    //   name: "BottomGallery",
    //   fields: {
    //     blogName: "String!",
    //     image: "String!",
    //   },
    // }),
    schema.buildObjectType({
      name: "MdxFrontmatter",
      fields: {
        categories: {
          type: "[String!]",
          resolve(source, args, context, info) {
            const { categories } = source
            if (
              categories == null ||
              (Array.isArray(categories) && !categories.length)
            ) {
              return ["uncategorized"]
            }
            return categories
          },
        },
        // bottomGallery: {
        //   type: "[BottomGallery]",
        //   resolve(source, args, context, info) {
        //     const { bottomGallery } = source
        //     if (
        //       bottomGallery == null ||
        //       (Array.isArray(bottomGallery) && !bottomGallery.length)
        //     ) {
        //       return []
        //     }
        //     return bottomGallery
        //   },
        // },
      },
    }),
  ]
  createTypes(typeDefs)
}
