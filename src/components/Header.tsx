import React from "react"
import { Box, Flex, Heading } from "theme-ui"
import { Link } from "./Link"

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box as="header" px={3} variant="container">
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

        <Heading as="h2" sx={{ textTransform: "lowercase" }}>
          sustainable living on a budget
        </Heading>
      </Box>

      <Flex
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
    </Box>
  )
}
