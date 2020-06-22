import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text, Image } from "rebass"
import { Link } from "./Link"

export const Blog = () => {
  const result = useStaticQuery(graphql`
    query GetAllPosts {
      allWordpressPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            jetpack_featured_media_url
          }
        }
      }
    }
  `)

  const posts = result.allWordpressPost.edges

  return (
    <Flex flexDirection="row" flexWrap="wrap">
      {posts.map(
        ({
          node: {
            id,
            title,
            excerpt,
            slug,
            jetpack_featured_media_url: mediaUrl,
          },
        }) => (
          <Box key={id} width={[1, 1 / 2, 1 / 3]} px={1}>
            <Flex>
              <Image
                mx="auto"
                height={["auto", 200]}
                sx={{ objectFit: "contain" }}
                src={mediaUrl}
              />
            </Flex>

            <Link to={`/blog/${slug}`}>
              <Heading textAlign="center" mt={3}>
                {title}
              </Heading>
            </Link>

            <Box>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Box>
          </Box>
        )
      )}
    </Flex>
  )
}
