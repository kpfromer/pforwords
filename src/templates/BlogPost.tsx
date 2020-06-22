import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"
// import Img from "gatsby-image"
// import SEO from "../components/SEO"
import { Box, Flex, Heading, Text } from "rebass"
import { Layout } from "../components/Layout"

export default ({ data, pageContext }) => {
  const {
    wordpressPost: { author, categories, date, title, content },
  } = data
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

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPostById($id: String!) {
    wordpressPost(id: { eq: $id }) {
      author
      categories
      date
      title
      slug
      content
    }
  }
`
