import React from 'react'
import
{
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Content from './Content'

function PortfolioModal({ isOpen, onClose, title, tagline, description, mainMedia, link, pdf, categories })
{
  const realLink = link ? link : pdf ? pdf.file.url : mainMedia.file.url

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl"  >
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader bgGradient="linear(to-r, teal.100, teal.300)" pr="10">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            // columns={{ base: "1", lg: "2" }}
            flexWrap={{ base: "wrap-reverse", lg: "nowrap" }}
            // spacing="8"
            p="4"
          >
            <Box as={GatsbyImage} image={getImage(mainMedia)} alt={title} flexGrow="1" />
            <Box ml={{ base: "0", lg: "10" }} maxW="400px" >
              <Text as="h3" fontWeight="semibold" fontSize="xl">{tagline}</Text>
              <Box as="hr" my="4" />
              <Content text={description} />
            </Box >
          </Flex>
        </ModalBody>
        <ModalFooter>


          <HStack spacing="8">
            <Button as="a" href={realLink} target="_blank" >
              {categories.some(y => y.name === "Script writing") ? "Watch" : "Read More"}
            </Button>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </HStack>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PortfolioModal