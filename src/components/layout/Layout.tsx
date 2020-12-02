import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Box } from 'rebass';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <Box variant="container" px={3}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};
