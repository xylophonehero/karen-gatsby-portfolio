import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

function PortfolioFilter({ name, handleClick, filter })
{

  return (
    <Box

      display="flex"
      justifyContent="center"
      alignItems="center"
      pos="relative"
      boxShadow="lg"
      borderRadius="8"
      p="2"
      onClick={() => handleClick(name)}

    >
      {filter === name && <Box as={motion.div} layoutId="filter" pos="absolute" w="full" h="full" bgGradient="linear(to-r,teal.100,teal.300)" borderRadius="8" />}
      <Text pos="relative" fontSize={["sm", "md"]}>{name}</Text>
    </Box>
  );
}

export default PortfolioFilter;