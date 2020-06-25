import React from "react"
import { Box, Flex, Link as ThemeLink } from "theme-ui"
import { Link } from "./Link"
import { InstagramFeed } from "../components/InstagramFeed"

export const Footer: React.FC = () => {
  return (
    <Box as="footer">
      <Box variant="container">
        <InstagramFeed />
        <Flex mb={2}>
          <ThemeLink
            href="https://www.instagram.com/taylor.pforwords/"
            ml="auto"
            sx={{
              textAlign: "center",
              color: "white",
              backgroundColor: "secondary",
              display: "inline-block",
              borderRadius: 5,
            }}
            p={2}
            my={2}
          >
            Follow me on instagram!
          </ThemeLink>
        </Flex>
      </Box>

      <Flex
        my={3}
        px={3}
        variant="container"
        sx={{
          flexDirection: ["column", "column", "row"],
          alignItems: "center",
        }}
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
    </Box>
  )
}
