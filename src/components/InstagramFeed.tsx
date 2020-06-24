import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import Img from "gatsby-image"

export const InstagramFeed = () => {
  const result = useStaticQuery(graphql`
    query GetInstagramPosts {
      allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            # Only available with the public api scraper
            # thumbnails {
            #   src
            #   config_width
            #   config_height
            # }
            # dimensions {
            #   height
            #   width
            # }
          }
        }
      }
    }
  `)

  const instagramPosts = result.allInstaNode.edges.flatMap(post => post.node)

  return (
    <Flex flexDirection="row" flexWrap="wrap" sx={{ justifyContent: "center" }}>
      {instagramPosts.map(post => (
        <Box>
          <Img key={post.id} fixed={post.localFile.childImageSharp.fixed} />
        </Box>
      ))}
    </Flex>
  )
}
