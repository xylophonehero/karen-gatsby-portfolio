import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function ServicesCard({ title, description })
{
  return (
    <Box
      boxShadow="xl"
      borderRadius="6"
      display="flex"
      flexDir="column"
      overflow="hidden"

    >
      <Box width="full" bgGradient="linear(to-r, teal.100, teal.300)" p="4">
        <Text textAlign="center" fontSize="lg" fontWeight="semibold">{title}</Text>
      </Box>
      <Box
        flexGrow="1"
        p="4"
        display="flex"
        flexDir="column"
        justifyContent="center"
        dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}
      />

    </Box>
  );
}

export default ServicesCard;