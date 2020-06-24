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
}

export const Post: React.FC<BlogPost> = ({
  title,
  coverImage,
  date,
  slug,
  excerpt,
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
        />
      </Flex>

      <Link to={`/blog${slug}`}>
        <Heading textAlign="center" my={3}>
          {title}
        </Heading>
      </Link>

      <Box>{excerpt}</Box>
    </Box>
  )
}
