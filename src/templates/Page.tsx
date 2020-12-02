import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/layout/Layout';

export default ({ data, pageContext }) => {
  const {
    mdx: {
      body,
      //   frontmatter: { title, coverImage, date },
    },
  } = data;
  return (
    <>
      {/* <SEO
        title={title}
        // image={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
      /> */}
      <Layout>
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </>
  );
};

export const query = graphql`
  query PageById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        # date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
