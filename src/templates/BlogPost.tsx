import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"
// import Img from "gatsby-image"
// import SEO from "../components/SEO"
import { Box, Flex, Heading, Text } from "rebass"
import { Layout } from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data, pageContext }) => {
  const {
    mdx: {
      body,
      frontmatter: { title, coverImage, date },
      // fields: {
      //   readingTime: { text: readingTime },
      // },
    },
  } = data
  const { previous, next } = pageContext
  return (
    <>
      {/* <SEO
        title={title}
        // image={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
      /> */}
      <Layout>
        <Box mt={3}>
          {/* // @ts-ignore */}
          <Link to="/blog" rel="back" sx={{ display: "block" }} mb={3}>
            ← Go Back
          </Link>

          <Heading fontSize={5} textAlign="center">
            {title}
          </Heading>

          <MDXRenderer>{body}</MDXRenderer>
        </Box>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        # tags
        # category
        # coverImage {
        #   childImageSharp {
        #     fluid(maxWidth: 1000) {
        #       ...GatsbyImageSharpFluid
        #       src
        #     }
        #   }
        # }
      }
      # fields {
      #   readingTime {
      #     text
      #   }
      # }
    }
  }
`
