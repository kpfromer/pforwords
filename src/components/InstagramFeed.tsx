import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from 'rebass';
import Img from 'gatsby-image';
import { Link } from 'theme-ui';

export const InstagramFeed = () => {
  const result = useStaticQuery<GatsbyTypes.GetInstagramPostsQuery>(graphql`
    query GetInstagramPosts {
      allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  `);

  const instagramPosts = result.allInstaNode.edges.flatMap((post) => post.node);

  return (
    <Flex flexDirection="row" flexWrap="wrap" sx={{ justifyContent: 'center' }} mt={4}>
      {instagramPosts.map((post) => (
        <Box key={post.id}>
          <Link href={`https://instagram.com/p/${post.id}`} rel="noopener" target="_blank">
            <Img key={post.id} fixed={post.localFile.childImageSharp.fixed} />
          </Link>
        </Box>
      ))}
    </Flex>
  );
};
