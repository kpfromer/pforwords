// import slash from `slash`;
import deepMap from 'deep-map';
import type { GatsbyNode } from 'gatsby';
import { fmImagesToRelative } from 'gatsby-remark-relative-source';
import { createFilePath } from 'gatsby-source-filesystem';
import _ from 'lodash';
import path from 'path';

const fileNodes = [];

const fmImagesToRelativeJson = (node) => {
  // pulled here: https://github.com/SublimateDesign/gatsby-remark-relative-source/blob/master/src/index.js
  // Save file references
  fileNodes.push(node);
  // Only process markdown files
  // console.log(node.internal.type)
  if (node.internal.type === `DataJson`) {
    // Convert paths in frontmatter to relative
    function makeRelative(value) {
      if (_.isString(value) && path.isAbsolute(value)) {
        const { base } = path.parse(value);
        // assuming json lives in /content/data
        return path.join('../images', base);

        // let imagePath
        // const foundImageNode = _.find(fileNodes, file => {
        //   if (!file.dir) return
        //   imagePath = path.join(file.dir, path.basename(value))
        //   return slash(path.normalize(file.absolutePath)) === slash(imagePath)
        // })
        // console.log(foundImageNode)
        // if (foundImageNode) {
        //   return slash(
        //     path.relative(path.join(node.fileAbsolutePath, ".."), imagePath)
        //   )
        // }
      }
      return value;
    }
    // Deeply iterate through frontmatter data for absolute paths
    deepMap(node.content, makeRelative, { inPlace: true });
  }
};

const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  // https://www.gatsbyjs.org/docs/node-apis/#onCreateNode

  const { createNodeField } = actions;

  fmImagesToRelative(node);
  fmImagesToRelativeJson(node);
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      name: `blogPath`,
      node,
      value: `/blog${value}`,
    });
  }
};

export default onCreateNode;
