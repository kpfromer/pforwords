import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import { Text } from 'theme-ui';
import { Title } from '../components/basic/Title';
import { Layout } from '../components/layout/Layout';
import SEO from '../components/seo';

const Paragraph = (props) => <Text as="p" mb={3} {...props} />;

const AboutPage = () => {
  const result = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "global/about.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />

      <Title sx={{ color: 'primary' }}>about taylor</Title>
      <Text sx={{ textAlign: 'center', fontSize: 3 }} mt={2} mb={4}>
        Hello and welcome to my zero waste and personal finance blog!
      </Text>

      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row'],
        }}
        my={3}
      >
        <Box width={[1, 4 / 5]} sx={{ alignSelf: ['center', 'center', 'start'] }}>
          <Box
            mx="auto"
            sx={{
              maxWidth: 800,
            }}
          >
            <Img fluid={result.file.childImageSharp.fluid} />
          </Box>
        </Box>

        <Box px={3}>
          <Paragraph>
            When I first embarked on my zero waste journey, I expected to spend more money on this
            lifestyle. But after a year of being zero (or as close to zero as I can get) waste, I
            noticed I had actually saved money. A lot of money.
          </Paragraph>
          <Paragraph>
            To help dispel the popular notion that being sustainable and eco-friendly is expensive,
            I wanted to create this blog to show how the opposite can be true.
          </Paragraph>
          <Heading>why i&apos;m zero waste:</Heading>
          <Paragraph>
            I grew up in Colorado, playing soccer during the week and either hiking, biking, or
            skiing on the weekend depending on the season.
          </Paragraph>
          <Paragraph>I was constantly surrounded by nature. And I took it for granted.</Paragraph>
          <Paragraph>
            At 18 years old, I flew across the country to attend university in Boston. My limited
            access to the outdoors coupled with my new city boundaries and my heightened attention
            to the news made me realize how destructive humans were to the environment.
          </Paragraph>
          <Paragraph>
            Trash littered every street. Rampant fires in California never seemed to cease.
            Hurricanes increased in intensity and frequency.
          </Paragraph>
          <Paragraph>These were just a few things that started to weigh on me.</Paragraph>
          <Paragraph>In the beginning of my senior year, I decided to do something.</Paragraph>
          <Paragraph>
            I didn&apos;t have any political clout nor really any other influence on others.
          </Paragraph>
          <Paragraph>
            What I did have were my own actions. So after hours of research, I decided to take
            measures into my own hands and start reducing my waste.
          </Paragraph>
          <Paragraph>
            I certainly wasn&apos;t perfect, and still am not now. But now I consider the
            environmental impact of every decision I make and I consider that a win.
          </Paragraph>
        </Box>
      </Flex>

      <Heading my={3}>why i&apos;m into personal finance</Heading>
      <Heading my={3}>(and how that works with being zero waste):</Heading>

      <Paragraph>
        Having just graduated from university in May of 2017 and starting my job in June, I have
        been uber conscious of how I spend and save my money.
      </Paragraph>
      <Paragraph>
        As soon as I signed my employment contract, I made a budget. To ensure that my money was
        being well spent I started diligently tracking my spending and discovered a few things.
      </Paragraph>
      <Paragraph>The first is that I spend way too on Indian takeout. I have no regrets.</Paragraph>
      <Paragraph>
        But the second was that I saw a significant increase in my savings from when I wasn&apos;t
        zero waste.
      </Paragraph>
      <Paragraph>
        I shocked both myself and my friends with these numbers and decided to document this
        journey.
      </Paragraph>
      <Paragraph>
        So here&apos;s my diary. All my musings, ideas, inspirations, everything related to zero
        waste and personal finance has been wrapped up into this one platform.
      </Paragraph>
      <Paragraph>
        Welcome! If you&apos;re interested in lessening your footprint print while saving some
        mullah, you&apos;ve come to the right place! I look forward to sharing this journey with
        you!
      </Paragraph>

      <Heading my={3}>reasons behind my name pforwords</Heading>
      <ol>
        <li>
          My last name starts with Pf (the &apos;P&apos; is silent) so I wanted to keep a little
          piece of my identity in my blog name.
        </li>
        <li>
          Pf also stands for personal finance, which is a key focus of my blog and it&apos;s
          relationship to being zero waste
        </li>
        <li>
          Forwords, when said out loud, sounds like forwards, which is the direction I want to keep
          going in life. It acts as a symbol of progression
        </li>
        <li>
          The spelling of Forwords pays tribute to this page being a blog, essential a log of all my
          words
        </li>
      </ol>
    </Layout>
  );
};

export default AboutPage;
