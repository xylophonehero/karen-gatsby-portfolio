import { Box, Stack, Text, VStack } from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function TestimonialCard({ author, jobTitle, avatar, testimonial })
{
  return (
    <Box
      bg="gray.200"
      boxShadow="xl"
      h="full"
      display="flex"
      flexDir="column"
      p={8}
      borderRadius="xl"
    >
      <Stack direction={["column", "row"]} spacing={["4", "8"]}>
        <Box as={GatsbyImage} image={getImage(avatar)} w="8em" h="8em" borderRadius="full" />
        <VStack spacing="4" alignItems="flex-start" flexShrink="10000">
          <Text as="h3" fontSize="2xl" fontWeight="semibold">{author}</Text>
          <Text>{jobTitle}</Text>
        </VStack>
      </Stack>
      <Box as="hr" my="8" borderColor="black" />
      <Box>
        <Text>{testimonial.testimonial}</Text>
      </Box>
    </Box>
  );
}

export default TestimonialCard;