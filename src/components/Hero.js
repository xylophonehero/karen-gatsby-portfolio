import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Box, Heading, Flex, VStack, Text } from '@chakra-ui/react';

import CTAButton from './CTAButton'
// import Content from './Content';

function Hero({ background, headline, description, profile })
{
  return (
    <Box
      pos="relative"
      w="100vw"
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
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

      <Box pos="absolute" h="full" w="full" bgColor="#000" opacity="0.6" />
      <Flex pos="relative" textColor="white" mx="auto" w="fit-content" p={["10", null, "20"]} alignItems="center">
        < Box display={["none", "block"]} >
          <Box rounded="full" bgGradient="linear(to-r, teal.300, teal.500)" w={["0", "10em", "xs"]} h={["0", "10em", "xs"]} p="3" mr="10">
            <Box as={GatsbyImage} image={getImage(profile)} alt="Karen" w="full" h="full" rounded="full" />
          </Box>
        </Box>
        <VStack maxW={["full", "40vw"]} spacing="8" align="flex-start" justify="center">
          <Heading fontSize={["3xl", "3xl", "4xl"]} color="white">{headline}</Heading>
          <Text fontSize={["lg", "xl", "2xl"]}>{description.description}</Text>
          {/* <Content text={description} fontSize={["lg", "xl", "2xl"]} /> */}
          <CTAButton text="See my work" url="/portfolio" />
        </VStack>
      </Flex>
    </Box >
  );
}

export default Hero;