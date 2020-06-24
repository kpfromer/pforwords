import React from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import { Link } from "./Link"

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex
      as="header"
      px={3}
      variant="container"
      sx={{ flexDirection: ["column", "column", "row"], alignItems: "center" }}
    >
      <Box sx={{ textAlign: "center" }} mb={3}>
        <Link
          to="/"
          sx={{
            fontSize: 6,
            fontWeight: "bold",
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
        <Link to="/about" variant="nav">
          Free Resources
        </Link>
        <Link to="/about" variant="nav">
          Products
        </Link>
        <Link to="/about" variant="nav">
          About
        </Link>
        <Link to="/contact" variant="nav">
          Contact
        </Link>
        <Link to="/contact" variant="nav">
          How To Start A Blog
        </Link>
      </Flex>
    </Flex>
  )
}
