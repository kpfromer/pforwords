import React from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import { Link } from "./Link"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const Sidebar: React.FC = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "global/sidebar-me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    }
  `)
  return (
    <Box px={4}>
      <Box>
        <Img fluid={file.childImageSharp.fluid} />
        <Text mt={3} pb={3} as="p">
          Amateur adult. Zero waste zealot. Personal finance fiend. Spicy food
          supporter. I’m an mid 20’s gal living in Denver, Colorado. My love of
          the outdoors has cultivated my zero waste lifestyle, which
          inadvertently fueled my passion for personal finance. Cheers to
          everyone interested in lessening their footprint while growing their
          wallet!
        </Text>
        <hr />
        <Heading>resources:</Heading>

        <Box py={3}>
          <Link to="/blog/100-swaps" mb={3} sx={{ display: "inline-block" }}>
            100 Zero Waste Swaps for your entire home &amp; life!
          </Link>
          <Link
            to="/blog/online-zero-waste-stores"
            sx={{ display: "inline-block" }}
          >
            Online Zero Waste Stores (so you can live sustainably anywhere)!
          </Link>
        </Box>
        <hr />
      </Box>
    </Box>
  )
}
