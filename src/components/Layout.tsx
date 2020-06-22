import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./Header"
import { Box, Text } from "rebass"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <Box variant="container" px={3}>
        <main>{children}</main>
        <Text>
          todo: homecontactblogfree content libraryterms and conditionsprivacy
          policy © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </Box>
    </>
  )
}
