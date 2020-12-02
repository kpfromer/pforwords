/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onRenderBody = require('./src/gatsby/onRenderBody').default;
exports.wrapRootElement = require('./src/gatsby/layout/root').default;
exports.wrapPageElement = require('./src/gatsby/layout/page').default;
