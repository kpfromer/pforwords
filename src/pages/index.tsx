import React from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import { Title } from "../components/Title"
import { RecentBlogs } from "../components/RecentBlogs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Title my={3}>recent posts</Title>
    <RecentBlogs />
  </Layout>
)

export default IndexPage
