import React from "react"
import { Box, Flex, Heading } from "theme-ui"
import { Link as ThemeLink } from "rebass"
import { Link } from "../basic/Link"

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex
      as="header"
      mt={3}
      px={3}
      variant="container"
      sx={{ flexDirection: ["column", "column", "row"], alignItems: "center" }}
    >
      <Box sx={{ textAlign: "center" }} mb={3}>
        <Link
          to="/"
          sx={{
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: 6,
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          {title}
        </Link>

        <Heading
          sx={{ fontWeight: "normal", fontSize: 3, fontStyle: "italic" }}
        >
          sustainable living on a budget
        </Heading>
      </Box>

      <Flex
        ml={["none", "none", "auto"]}
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          textAlign: ["center", "left"],
        }}
      >
        <Link to="/blog" variant="nav">
          Blog
        </Link>
        <ThemeLink
          href="https://mailchi.mp/be227f5f5cdc/freeresources"
          variant="nav"
        >
          Resource Library
        </ThemeLink>
        <Link to="/about" variant="nav">
          About
        </Link>
        <Link to="/contact" variant="nav">
          Contact
        </Link>
      </Flex>
    </Flex>
  )
}
