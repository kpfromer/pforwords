import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/basic/Link"
// import Img from "gatsby-image"
// import SEO from "../components/SEO"
import { Box, Flex, Heading, Text } from "rebass"
import { Layout } from "../components/layout/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Sidebar } from "../components/layout/Sidebar"
import { Share } from "../components/layout/Share"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const {
    site: {
      siteMetadata: { url: baseUrl },
    },
    mdx: {
      body,
      frontmatter: { title, coverImage, date },
      fields: {
        slug,
        readingTime: { text: readingTime },
      },
    },
  } = data
  const { previous, next } = pageContext
  return (
    <>
      <SEO
        title={title}
        // image={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
      />
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

            <Box mb={2}>
              <Text as="small" sx={{ textTransform: "uppercase" }}>
                {/* TODO: add category page */}
                {date} • {readingTime}
              </Text>
              <Heading
                fontSize={6}
                sx={{
                  borderBottom: "2px solid #eaecef",
                }}
                mt={2}
                mb={3}
              >
                {title}
              </Heading>
            </Box>

            <Share
              my={2}
              shareUrl={`${baseUrl}/blog${slug}`}
              imageUrl={`${baseUrl}${coverImage.publicURL}`}
            />

            <MDXRenderer>{body}</MDXRenderer>
          </Box>

          <Box width={[1, 1, 1 / 4]} mt={5}>
            <Sidebar />
          </Box>
        </Flex>

        <Share
          mb={4}
          shareUrl={`${baseUrl}/blog${slug}`}
          imageUrl={`${baseUrl}${coverImage.publicURL}`}
        />

        <Box as="nav" sx={{ borderTop: "2px solid #eaecef" }} pt={3} mb={4}>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box>
              {previous && (
                <Link to={previous.fields.blogPath} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </Box>
            <Box>
              {next && (
                <Link to={next.fields.blogPath} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </Box>
          </Flex>
        </Box>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        url
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")

        coverImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
