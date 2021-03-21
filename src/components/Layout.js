import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

function Layout({ children })
{
  return (
    <Flex direction="column" pos="relative" minH="100vh">
      <Header />
      <Box as="main" flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  );
}

export default Layout;