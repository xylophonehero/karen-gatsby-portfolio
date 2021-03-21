import { Box, Stack, Heading, VStack, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import PageLayout from '../components/PageLayout';
import CTAButton from '../components/CTAButton';


function About({ data })
{
  const aboutInfo = data.contentfulAboutPage

  return (
    <PageLayout pageTitle={aboutInfo.title}>
      <Stack direction={["column", null, "row"]} spacing="8">
        <Box
          as={GatsbyImage}
          image={getImage(aboutInfo.profile)}
          w="400px"
          alt="Karen"

        />
        <Box dangerouslySetInnerHTML={{ __html: aboutInfo.body.childMarkdownRemark.html }} />
      </Stack>
      <VStack my="8" textAlign="center">
        <Heading fontSize="3xl">Want to talk about a project?</Heading>
        <CTAButton text="Let's Chat" url="/contact" />
        {/* <Text fontSize="xl">Let's chat: <a href="mailto:info@karenworrall.co.uk" rel="noreferrer" target="_blank">info@karenworrall.co.uk</a></Text> */}
      </VStack>
      <Heading fontSize="4xl">Education</Heading>
      <Text>I’m a big believer in constant personal development and honing your craft. Here’s a summary of my relevant education so far:</Text>
      <ul>
        {aboutInfo.education.map((item) => (
          <li key={item.qualification}>{`${item.year} - ${item.qualification} - ${item.institution}`}</li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default About;

export const query = graphql`
  query AboutQuery {
    contentfulAboutPage {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      profile {
        gatsbyImageData(
          width: 400
        )
      }
      education {
        year
        qualification
        institution
      }
    }
  }
`