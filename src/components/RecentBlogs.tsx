import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text, Image } from "rebass"

export const RecentBlogs = () => {
  const result = useStaticQuery(graphql`
    query GetPosts {
      allWordpressPost(limit: 3) {
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
    <Flex>
      {posts.map(
        ({
          node: { id, title, excerpt, jetpack_featured_media_url: mediaUrl },
        }) => (
          <Box key={id} width={1 / posts.length} px={1}>
            <Image src={mediaUrl} />
            <Heading textAlign="center">{title}</Heading>
            <Box>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Box>
          </Box>
        )
      )}
    </Flex>
  )
}
