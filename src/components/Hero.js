import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import CTAButton from './CTAButton'

function Hero({ background, headline, description, profile })
{
  return (
    <Box
      pos="relative"
      w="100vw"
      h="90vh"
    >
      <Box
        as={GatsbyImage}
        zIndex="base"
        h="full"
        w="full"
        overflowY="hidden"
        image={getImage(background)}
        style={{ position: "absolute" }}
        alt="laptop"
      />

      <Box pos="absolute" h="full" w="full" bgColor="#000" opacity="0.5" />
      <HStack pos="relative" textColor="white" mx="auto" w="fit-content" spacing="10" p={["10", "20"]}>
        <Box display={["none", "block"]}>
          <Box rounded="full" bgGradient="linear(to-r, teal.300, teal.500)" w={["0", "3xs", "xs"]} h={["0", "3xs", "xs"]} p="3">
            <Box as={GatsbyImage} image={getImage(profile)} alt="Karen" w="full" h="full" rounded="full" />
          </Box>
        </Box>
        <VStack maxW={["full", "40vw"]} spacing="8" align="flex-start">
          <Heading fontSize={["2xl", "3xl", "4xl"]}>{headline}</Heading>
          <Text fontSize={["lg", "xl", "2xl"]}>{description.description}</Text>
          <CTAButton text="See my work" url="/" />
        </VStack>
      </HStack>
    </Box>
  );
}

export default Hero;