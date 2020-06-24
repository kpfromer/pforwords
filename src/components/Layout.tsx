import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./Header"
import { Box } from "rebass"
import { Footer } from "./Footer"

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
      </Box>
      <Footer />
    </>
  )
}
