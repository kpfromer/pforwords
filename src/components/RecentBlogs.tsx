import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text, Image } from "rebass"
import Img from "gatsby-image"

export const RecentBlogs = () => {
  const result = useStaticQuery(graphql`
    query GetRecentPosts {
      allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            body
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
    <Flex>
      {posts.map(({ id, title, frontmatter: { coverImage } }) => (
        <Box key={id} width={1 / posts.length} px={1}>
          {/* <Image src={mediaUrl} /> */}
          <Img
            style={{
              objectFit: "cover",
              maxHeight: "50vh",
              minWidth: "100%",
            }}
            fluid={coverImage.childImageSharp.fluid}
          />
          <Heading textAlign="center">{title}</Heading>
          {/* <Box>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Box> */}
        </Box>
      ))}
    </Flex>
  )
}
