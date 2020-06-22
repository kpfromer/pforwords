import React from "react"
import { Link } from "gatsby"
import { Text } from "rebass"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import { Title } from "../components/Title"
import { Blog } from "../components/Blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>blog posts</Title>
    <Blog />
  </Layout>
)

export default IndexPage
