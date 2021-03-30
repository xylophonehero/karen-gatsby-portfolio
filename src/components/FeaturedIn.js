import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function FeaturedIn(props)
{
  const data = useStaticQuery(graphql`{
    allFile(
      filter: {relativeDirectory: {eq: "featured-in"}}
      sort: {order: ASC, fields: name}
    ) {
      nodes {
        name
        publicURL
      }
    }
  }`)

  return (
    <Box bgColor="gray.200" p="6">
      <SimpleGrid columns={[1, 2, 4, 4, 8]}>
        {data.allFile.nodes.map(svg => (
          <Flex key={svg.name} w="150px" h="100px" justifyContent="center" direction="column" alignItems="center" mx="auto">
            <img src={svg.publicURL} alt={svg.name} />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FeaturedIn;