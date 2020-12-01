import React from 'react';
import { Box, Heading, Flex } from 'rebass';
import Img from 'gatsby-image';
import { Link } from '../basic/Link';

interface Props {
  data: { blogName: string; image: any }[];
}

export const BottomGallery: React.FC<Props> = ({ data }) => (
  <Box my={3}>
    <Heading color="primary" mb={2}>
      you make also like
    </Heading>
    <Flex flexWrap="wrap" justifyContent="center">
      {data.map(({ blogName, image }) => (
        <Box key={blogName} px={2} width={1 / 3}>
          <Link to={`/blog/${blogName}`}>
            <Img fluid={image.childImageSharp.fluid} />
          </Link>
        </Box>
      ))}
    </Flex>
  </Box>
);
