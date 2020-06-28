import React from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  useThemeUI,
  Link as ThemeLink,
} from "theme-ui"
import { Link } from "../basic/Link"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"
import { IconContext } from "react-icons"

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
  const { theme } = useThemeUI()
  return (
    <Box px={4}>
      <Box>
        <Img fluid={file.childImageSharp.fluid} />
        <Heading mt={3} sx={{ textAlign: "center" }}>
          Hi, I'm Taylor
        </Heading>
        <Text mt={3} pb={3} as="p">
          Amateur adult. Zero waste zealot. Personal finance fiend. Spicy food
          supporter. I’m an mid 20’s gal living in Denver, Colorado. My love of
          the outdoors has cultivated my zero waste lifestyle, which
          inadvertently fueled my passion for personal finance. Cheers to
          everyone interested in lessening their footprint while growing their
          wallet!
        </Text>
        <Flex sx={{ justifyContent: "center" }} mb={3}>
          <IconContext.Provider
            value={{
              style: {
                verticalAlign: "middle",
                color: theme.colors.secondary,
              },
              size: "2em",
            }}
          >
            <ThemeLink href="https://www.instagram.com/taylor.pforwords/">
              <FaInstagram />
            </ThemeLink>
            <ThemeLink mx={3} href="https://www.pinterest.com/pforwords/">
              <FaPinterest />
            </ThemeLink>
            <ThemeLink href="https://www.youtube.com/channel/UCraysvt9W6qZQFDiJDT1OSw">
              <FaYoutube />
            </ThemeLink>
          </IconContext.Provider>
        </Flex>
        <hr />
        <Heading>resources:</Heading>

        <Box py={3}>
          <Link
            to="/blog/100-swaps"
            mb={3}
            sx={{ display: "inline-block", color: "primary" }}
          >
            100 Zero Waste Swaps for your entire home &amp; life!
          </Link>
          <Link
            to="/blog/online-zero-waste-stores"
            sx={{ display: "inline-block", color: "primary" }}
          >
            Online Zero Waste Stores (so you can live sustainably anywhere)!
          </Link>
        </Box>
        <hr />
      </Box>
    </Box>
  )
}
