import { Box, Stack, VStack, Text, Flex, Link } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

function Footer()
{
  const data = useStaticQuery(graphql`{
    allFile(
      filter: {relativeDirectory: {eq: "badges"}}
      sort: {order: ASC, fields: name}
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }`)

  return (
    <Box w="full" p="12" bgColor="gray.200">
      <VStack>
        <Stack direction={["column", "row"]} spacing={["4", "4", "12"]} mb="8">
          {data.allFile.nodes.map((badge) => (
            <Badge key={badge.name} {...badge} />
          ))}
        </Stack>
        <Flex flexDir={["column", "row"]} justifyContent="space-between" maxW="720px" w="full" textAlign="center">
          <Text mb="4">Copyright © {new Date().getFullYear()} Karen Worrall</Text>
          <Text>Website created by <Link href="https://nickworrall.co.uk" isExternal>Nick Worrall</Link></Text>
        </Flex>
      </VStack>

    </Box>
  );
}

export default Footer;

function Badge({ name, childImageSharp })
{
  return (
    <Box w={["150px", null, "175px"]}>
      <GatsbyImage image={getImage(childImageSharp)} alt={name} objectFit="contain" />
    </Box >
  )
}