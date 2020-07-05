import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex } from "rebass"
import { Post } from "../components/Post"
import { Title } from "../components/basic/Title"
import { Layout } from "../components/layout/Layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const posts = data.allMdx.edges.flatMap(post => post.node)

  return (
    <>
      <SEO title={pageContext.category} />
      <Layout>
        <Title>{pageContext.category}</Title>
        <Flex flexDirection="row" flexWrap="wrap">
          {posts.map(
            ({
              id,
              excerpt,
              fields: {
                slug,
                readingTime: { text: readingTime },
              },
              frontmatter: { title, coverImage, date, categories },
            }) => (
              <Post
                key={id}
                title={title}
                slug={slug}
                coverImage={coverImage}
                categories={categories}
                date={date}
                excerpt={excerpt}
                readingTime={readingTime}
              />
            )
          )}
        </Flex>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPostsByCategory($category: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { categories: { in: [$category] } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            categories
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
