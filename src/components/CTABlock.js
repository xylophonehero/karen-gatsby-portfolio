import React from 'react';
import { VStack, Heading } from '@chakra-ui/react'
import CTAButton from './CTAButton'

function CTABlock({ text, buttonText, buttonTo })
{
  return (
    <VStack p="8" m="16" textAlign="center" spacing="8" bg="gray.200" rounded="xl" w="fit-content">
      <Heading fontSize="3xl" color="black">{text}</Heading>
      <CTAButton text={buttonText} url={buttonTo} />
    </VStack>
  );
}

export default CTABlock;