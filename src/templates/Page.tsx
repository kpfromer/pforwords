import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"
// import Img from "gatsby-image"
// import SEO from "../components/SEO"
import { Box, Flex, Heading, Text } from "rebass"
import { Layout } from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Sidebar } from "../components/Sidebar"

export default ({ data, pageContext }) => {
  const {
    mdx: {
      body,
      //   frontmatter: { title, coverImage, date },
    },
  } = data
  return (
    <>
      {/* <SEO
        title={title}
        // image={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
      /> */}
      <Layout>
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </>
  )
}

export const query = graphql`
  query PageById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        # date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
