import React from 'react';
import { Link } from './basic/Link';
import { Box, Flex, Heading, Text } from 'rebass';
import { Layout } from './layout/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { Sidebar } from './layout/Sidebar';
import SEO from './seo';

interface BlogPost {
  title: string;
  coverImage: any; // todo: better types
  date: string;
  categories: string[];
  slug: string;
  excerpt: string;
  readingTime: string;
}

export const Post: React.FC<BlogPost> = ({
  title,
  coverImage,
  date,
  categories,
  slug,
  excerpt,
  readingTime,
}) => {
  return (
    <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={[2, 3, 3]}>
      <Flex>
        <Link
          to={`/blog${slug}`}
          style={{
            display: 'block',
            maxHeight: '50vh',
            minWidth: '100%',
          }}
        >
          <Img
            style={{
              objectFit: 'cover',
            }}
            fluid={coverImage.childImageSharp.fluid}
            alt={title}
          />
        </Link>
      </Flex>

      <Box my={2}>
        <Text as="small" sx={{ textTransform: 'uppercase', display: 'block' }}>
          {date} • {readingTime} • {categories.join(', ')}
        </Text>

        <Link to={`/blog${slug}`} mt={2} sx={{ display: 'block', color: 'text' }}>
          <Heading textAlign="center">{title}</Heading>
        </Link>
      </Box>

      <Box>{excerpt}</Box>
    </Box>
  );
};
