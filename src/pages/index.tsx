import React from 'react';
import { Layout } from '../components/layout/Layout';
import SEO from '../components/seo';
import { Title } from '../components/basic/Title';
import { RecentBlogs } from '../components/RecentBlogs';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Flex, Text } from 'rebass';
import { Link } from 'gatsby';

const Paragraph = (props) => <Text as="p" fontSize={[2, 2, 3]} {...props} />;

const Category = ({ to, image }) => (
  <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={3}>
    <Link to={to}>
      <Img
        style={{
          objectFit: 'cover',
          maxHeight: '50vh',
          minWidth: '100%',
        }}
        fluid={image.childImageSharp.fluid}
      />
    </Link>
  </Box>
);

const IndexPage = () => {
  const { image, home, lifestyle, shopping, travel, activism, education } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "home/cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      home: file(relativePath: { eq: "home/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      lifestyle: file(relativePath: { eq: "home/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      shopping: file(relativePath: { eq: "home/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      travel: file(relativePath: { eq: "home/4.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      activism: file(relativePath: { eq: "home/5.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      education: file(relativePath: { eq: "home/6.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const categories = [
    { name: 'home', image: home },
    { name: 'lifestyle', image: lifestyle },
    { name: 'shopping', image: shopping },
    { name: 'travel', image: travel },
    { name: 'activism', image: activism },
    { name: 'education', image: education },
  ];

  return (
    <Layout>
      <SEO title="Home" />

      <Flex flexDirection={['column', 'column', 'row']} mt={4} mb={3}>
        <Box
          mx="auto"
          sx={{
            width: 300,
            alignSelf: ['center', 'center', 'start'],
          }}
        >
          <Img fluid={image.childImageSharp.fluid} />
        </Box>

        {/* <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
          <Img fluid={image.childImageSharp.fluid} />
        </Box> */}

        <Box sx={{ flexGrow: 1 }} mt={[3, 0, 0]} px={4}>
          <Title mb={3}>hi, i&apos;m taylor</Title>
          <Paragraph>
            I&apos;m here to dispel the notion that living sustainably is expensive. On the contrary
            - living a low impact lifestyle will save you money while saving the planet.
          </Paragraph>
          <Paragraph>
            Whether you&apos;re new to this lifestyle or more advanced, there is always something
            more to learn and be done.{' '}
          </Paragraph>
          <Paragraph>How to live a more sustainable lifestyle while saving money.</Paragraph>
        </Box>
      </Flex>

      <Title>categories</Title>

      <Flex flexWrap="wrap">
        {categories.map(({ name, image }) => (
          <Category key={name} to={`/category/${name}`} image={image} />
        ))}
      </Flex>

      <Title my={3}>recent posts</Title>
      <RecentBlogs />
    </Layout>
  );
};

export default IndexPage;
