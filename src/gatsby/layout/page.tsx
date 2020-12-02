import type { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../../utils/theme';

const Page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  // This wrapper is mounted once but re-rendered on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
  return (
    <ThemeProvider theme={theme}>
      {element}
      {/* <MDXProvider components={mdx}>{element}</MDXProvider> */}
    </ThemeProvider>
  );
};

export default Page;
