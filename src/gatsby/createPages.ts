import type { GatsbyNode } from 'gatsby';
import path from 'path';

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  // https://www.gatsbyjs.org/docs/node-apis/#createPages

  const { createPage } = actions;

  // create blog posts pages from /content/blog
  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`);
  const result = await graphql<{
    allMdx: {
      edges: {
        node: {
          id: string;
          fields: {
            blogPath: string;
            slug: string;
          };
          frontmatter: {
            title: string;
            categories: string[];
          };
        };
      }[];
    };
  }>(
    `
      {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/content/blog/" }
            frontmatter: { hidden: { eq: false } }
          }
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
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    const { slug, blogPath } = post.node.fields;

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
    });
  });

  // create mdx pages from /content/pages
  const pageTemplate = path.resolve(`./src/templates/Page.tsx`);
  const resultPage = await graphql<{
    allMdx: {
      edges: {
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
          };
        };
      }[];
    };
  }>(
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
    `,
  );

  if (resultPage.errors) {
    throw resultPage.errors;
  }

  // Create blog posts pages.
  const pages = resultPage.data.allMdx.edges;

  pages.forEach((post) => {
    const { slug } = post.node.fields;

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        id: post.node.id,
        slug,
      },
    });
  });

  // Create categories pages

  const categoryPage = path.resolve('./src/templates/Category.tsx');
  // Get all categories as set
  const categories = new Set(
    posts.reduce((prev, post) => [...prev, ...post.node.frontmatter.categories], []),
  );

  categories.forEach((category) => {
    createPage({
      path: `/category/${category.toLowerCase()}`,
      component: categoryPage,
      context: {
        category,
      },
    });
  });
};

export default createPages;
