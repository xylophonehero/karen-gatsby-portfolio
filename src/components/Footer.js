import { Box, Stack, VStack, Text, Flex, Link } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Footer()
{
  return (
    <Box w="full" p="12" bgColor="gray.200">
      <VStack>
        <Stack direction={["column", "row"]} spacing={["4", "4", "12"]} mb="8">
          <Box w={["150px", null, "175px"]}>
            <StaticImage src='../../static/badge-copywriter.png' alt="copywriter" objectFit="contain" />
          </Box>
          <Box w={["150px", null, "175px"]}>
            <StaticImage src='../../static/badge-copywriter.png' alt="copywriter" objectFit="contain" />
          </Box>
          <Box w={["150px", null, "175px"]}>
            <StaticImage src='../../static/badge-copywriter.png' alt="copywriter" objectFit="contain" />
          </Box>
          {/* <Badge src='../../static/badge-editor.png' alt="copywriter" />
          <Badge src='../../static/badge-proofreader.png' alt="copywriter" /> */}
          {/* <StaticImage src={Editor} alt="editor" />
          <StaticImage src={Proofreader} alt="proofreader" /> */}
        </Stack>
        <Flex flexDir={["column", "row"]} justifyContent="space-between" maxW="720px" w="full" textAlign="center">
          <Text mb="4">Copywright © 2020 Karen Worrall</Text>
          <Text>Website created by <Link href="https://nickworrall.co.uk" isExternal>Nick Worrall</Link></Text>
        </Flex>
      </VStack>

    </Box>
  );
}

export default Footer;