import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text, Image } from "rebass"
import { Link } from "./Link"
import Img from "gatsby-image"

export const Blog = () => {
  const result = useStaticQuery(graphql`
    query GetAllPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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
          fields: { slug },
          frontmatter: { title, coverImage },
        }) => (
          <Box key={id} width={[1, 1 / 2, 1 / 2, 1 / 3]} p={[2, 3, 3]}>
            <Flex>
              <Img
                style={{
                  objectFit: "cover",
                  maxHeight: "50vh",
                  minWidth: "100%",
                }}
                fluid={coverImage.childImageSharp.fluid}
              />
            </Flex>

            <Link to={`/blog${slug}`}>
              <Heading textAlign="center" my={3}>
                {title}
              </Heading>
            </Link>
            <Box>{excerpt}</Box>

            {/* <Box>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Box> */}
          </Box>
        )
      )}
    </Flex>
  )
}
