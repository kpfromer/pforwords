import React from "react"
import { Link } from "../components/Link"
import { Box, Flex, Heading, Text } from "rebass"
import { Layout } from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Sidebar } from "../components/Sidebar"
import SEO from "./seo"

interface BlogPost {
  title: string
  coverImage: any // todo: better types
  date: string
  slug: string
  excerpt: string
  readingTime: string
}

export const Post: React.FC<BlogPost> = ({
  title,
  coverImage,
  date,
  slug,
  excerpt,
  readingTime,
}) => {
  //   const { previous, next } = pageContext
  return (
    <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={[2, 3, 3]}>
      <Flex>
        <Img
          style={{
            objectFit: "cover",
            maxHeight: "50vh",
            minWidth: "100%",
          }}
          fluid={coverImage.childImageSharp.fluid}
          alt={title}
        />
      </Flex>

      <Box my={2}>
        <Text as="small" sx={{ textTransform: "uppercase", display: "block" }}>
          {/* TODO: add category page */}
          {date} • {readingTime}
        </Text>

        <Link to={`/blog${slug}`} mt={2} sx={{ display: "block" }}>
          <Heading textAlign="center">{title}</Heading>
        </Link>
      </Box>

      <Box>{excerpt}</Box>
    </Box>
  )
}
