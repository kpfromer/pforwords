import React from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import { Title } from "../components/Title"
import { Text, Link } from "theme-ui"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Title sx={{ color: "primary" }} my={3}>
      contact
    </Title>
    <Text my={1}>Well hello there!</Text>
    <Text my={1}>Have a question? Want to work with me?</Text>
    <Text my={1}>
      Please feel free to email me at{" "}
      <Link href="mailto:pforwords@gmail.com">pforwords@gmail.com</Link>
    </Text>
    <Text mb={3}>
      I pinky promise I will get back to you as soon as I can. Fair warning I do
      work a full time job so please bear with me with my response time.
    </Text>
    <Text>Thank you so much for your interest!</Text>
  </Layout>
)

export default ContactPage
