import type { GatsbyBrowser } from 'gatsby';
import '../../fonts.css';

const Root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  // This wrapper is mounted once and does not re-render on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
  return element;
};

export default Root;
