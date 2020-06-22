import React from "react"
import { Link } from "gatsby"
import { Text } from "rebass"
import { Layout } from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Title } from "../components/Title"
import { RecentBlogs } from "../components/RecentBlogs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Title>featured posts</Title>
    <RecentBlogs />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
