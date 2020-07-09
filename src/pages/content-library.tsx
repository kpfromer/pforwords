import React, { useState } from "react"
import { Layout } from "../components/layout/Layout"
import SEO from "../components/seo"
import { Button, Box, Flex, Link, Heading } from "rebass"
import { Label, Input } from "@rebass/forms"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaCloudDownloadAlt } from "react-icons/fa"
import { IconContext } from "react-icons"

const ContactPage = () => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    file: {
      childDataJson: { content },
    },
  } = useStaticQuery(graphql`
    query ContentLibrary {
      site {
        siteMetadata {
          siteUrl
        }
      }

      file(relativePath: { eq: "content-library.json" }) {
        childDataJson {
          content {
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            pdf {
              publicURL
            }
          }
        }
      }
    }
  `)

  const [valid, setValid] = useState(
    localStorage?.getItem("content-library") === "true"
  )
  const [password, setPassword] = useState("")
  const onSubmit = event => {
    event.preventDefault()
    if (password === "password") {
      setValid(true)
      window?.localStorage.setItem("content-library", "true")
    }
  }
  return (
    <Layout>
      <SEO title="Content Library" />
      {valid ? (
        <Flex flexWrap="wrap" justifyContent="center">
          {content.map(contentItem => (
            <Box width={1 / 3} style={{ position: "relative" }}>
              <Img fluid={contentItem.image.childImageSharp.fluid} />
              <Flex
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  opacity: 0,
                  transition: ".15s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,.8)",
                    opacity: 1,
                  },
                }}
              >
                <Box m="auto">
                  <Heading textAlign="center" mb={2}>
                    {contentItem.title}
                  </Heading>

                  <Link
                    href={siteUrl + contentItem.pdf.publicURL}
                    sx={{
                      color: "text",
                      "&:hover": { color: "secondary" },
                      textAlign: "center",
                      display: "block",
                    }}
                    mx="auto"
                  >
                    <IconContext.Provider
                      value={{
                        size: "2.5em",
                        style: { verticalAlign: "middle" },
                      }}
                    >
                      <FaCloudDownloadAlt />
                    </IconContext.Provider>
                  </Link>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      ) : (
        <>
          <form onSubmit={onSubmit}>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <Button type="submit">Submit</Button>
          </form>
        </>
      )}
    </Layout>
  )
}

export default ContactPage
