import { Flex, Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Content from './Content';
import CTAButton from './CTAButton';

function HomeLinkBlock({ title, text, buttonText, buttonTo, children, left, isLast = false })
{
  return (
    <Box >
      <Box
        h="2"
        bgGradient="linear(to-r, teal.500, cyan.500)"
      />
      <Flex flexDir="row" flexFlow={left ? "row-reverse" : "none"} minH="40vh">
        <Flex flexDir="column" justify="center" alignItems="center" bgColor="gray.200" w="50%" p="8">
          <VStack spacing="4">
            <Heading fontSize="2xl">{title}</Heading>
            <Content text={text} />
            <CTAButton text={buttonText} url={buttonTo} />
          </VStack>
        </Flex>
        <Box w="50%">
          {children}
        </Box>
      </Flex>
      {isLast && <Box
        h="2"
        bgGradient="linear(to-r, teal.500, cyan.500)"
      />}
    </Box>
  );
}

export default HomeLinkBlock;