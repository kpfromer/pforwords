/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onClientEntry = require('./src/gatsby/onClientEntry').default;
exports.wrapRootElement = require('./src/gatsby/layout/root').default;
exports.wrapPageElement = require('./src/gatsby/layout/page').default;
