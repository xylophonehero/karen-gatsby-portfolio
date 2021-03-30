import { Box, Stack, Heading, Text, Icon, SimpleGrid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { FaBook } from 'react-icons/fa'

import PageLayout from '../components/PageLayout';
import Content from '../components/Content'
import CTABlock from '../components/CTABlock';


function About({ data })
{
  const pageData = data.contentfulAboutPage

  return (
    <PageLayout pageTitle={pageData.title}>
      <Stack direction={["column", null, "row"]} spacing="8" alignItems={["center", null, "start"]}>
        <Box
          as={GatsbyImage}
          image={getImage(pageData.profile)}
          w="300px"
          maxH="400px"
          alt="Karen"
          borderRadius="xl"
        />
        <Box maxW={{ base: "full", md: "26em", lg: "36em", xl: "56em" }}>

          <Content text={pageData.body} />
        </Box>
      </Stack>
      <CTABlock
        text="Want to talk about a project?"
        buttonText="Let's Chat"
        buttonTo="/contact"
      />
      <Box w="full" textAlign="left">
        <Heading fontSize="4xl" textAlign="center" mb="4">Education</Heading>
        <Text textAlign="center" mb="4">I’m a big believer in constant personal development and honing your craft. Here’s a summary of my relevant education so far:</Text>

        <SimpleGrid columns={[1, 1, 2]} spacing="4" maxW="4xl" mx="auto">
          {pageData.education.map((item) => (
            <Box key={item.id} >
              <Box as="span" fontWeight="medium" color="teal.700"><Icon as={FaBook} mr="2" mb="1" />{item.qualification}: </Box>
              <Box ml="6">{item.year} - {item.institution}</Box>
            </Box>
          ))}
        </SimpleGrid>

      </Box>
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
        id
        year
        qualification
        institution
      }
    }
  }
`