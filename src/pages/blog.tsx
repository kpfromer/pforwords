import React from 'react';
import { Title } from '../components/basic/Title';
import { Blog } from '../components/Blog';
import { Layout } from '../components/layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Title>blog posts</Title>
    <Blog />
  </Layout>
);

export default IndexPage;
