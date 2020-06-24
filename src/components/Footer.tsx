import React from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import { Link } from "./Link"

export const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      mt={4}
      px={3}
      variant="container"
      sx={{ flexDirection: "row", alignItems: "center" }}
    >
      <Link to="/blog" variant="nav">
        home
      </Link>
      <Link to="/blog" variant="nav">
        blog
      </Link>
      <Link to="/contact" variant="nav">
        contact
      </Link>
      <Link to="/free-content-library" variant="nav">
        free content library
      </Link>
      <Link to="/terms" variant="nav">
        terms and conditions
      </Link>
      <Link to="/privacy" variant="nav">
        privacy policy
      </Link>
    </Flex>
  )
}
