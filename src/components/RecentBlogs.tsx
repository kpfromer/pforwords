import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex } from "rebass"
import { Post } from "./Post"

export const RecentBlogs = () => {
  const result = useStaticQuery(graphql`
    query GetRecentPosts {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        limit: 3
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
  `)

  const posts = result.allMdx.edges.flatMap(post => post.node)

  return (
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
  )
}
