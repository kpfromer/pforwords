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
        <Flex flexDirection={["column", "column", "row"]}>
          <Box width={[1, 1, 3 / 4]} mt={3}>
            {/* // @ts-ignore */}
            <Link to="/blog" rel="back" sx={{ display: "block" }} mb={3}>
              ← Go Back
            </Link>

            <Box mb={3}>
              <Img
                style={{
                  objectFit: "scale-down",
                  maxHeight: "50vh",
                  minWidth: "100%",
                }}
                fluid={coverImage.childImageSharp.fluid}
              />
            </Box>

            <Box>
              <Text as="small">{date}</Text>
            </Box>

            <Heading fontSize={5} textAlign="center">
              {title}
            </Heading>

            <MDXRenderer>{body}</MDXRenderer>
          </Box>

          <Box width={[1, 1, 1 / 4]} mt={5}>
            <Sidebar />
          </Box>
        </Flex>
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
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
      # fields {
      #   readingTime {
      #     text
      #   }
      # }
    }
  }
`
