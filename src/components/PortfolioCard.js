import { Box, Text, useDisclosure, Tag } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PortfolioModal from './PortfolioModal'

function PortfolioCard({ title, tagline, description, thumb, mainMedia, link, pdf, categories })
{
  const { isOpen, onOpen, onClose } = useDisclosure()

  const variants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, sclae: 0.2 }
  }

  return (
    <>
      <Box
        as={motion.div}
        display="flex"
        flexDir="column"
        w="full"
        maxW="350px"
        h="full"
        borderRadius="xl"
        boxShadow="xl"
        layout
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transformOrigin="bottom"
        overflow="hidden"
        onClick={onOpen}
        cursor="pointer"
      >
        <Box pos="relative" h="48">
          <Box as={GatsbyImage} image={getImage(thumb)} alt={title} pos="absolute" h="full" />
          <Tag pos="absolute" m="2" bottom="0" right="0" bgColor="teal.200" textAlign="right" w="fit-content">{tagline}</Tag>
        </Box>
        <Box bgGradient="linear(to-l,teal.200,teal.50)" p="4" display="flex" flexDir="column" alignItems="center" justifyContent="center" h="20">
          <Text textAlign="center" fontSize="xl" fontWeight="semibold" >{title}</Text>
        </Box>
      </Box>
      <PortfolioModal onClose={onClose} isOpen={isOpen} title={title} tagline={tagline} description={description} mainMedia={mainMedia} link={link} pdf={pdf} categories={categories} />
    </>
  );
}

export default PortfolioCard;