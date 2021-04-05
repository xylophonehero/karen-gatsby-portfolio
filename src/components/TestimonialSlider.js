import React from 'react';
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Stack, Text, Heading } from '@chakra-ui/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IconButton } from '@chakra-ui/button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import CTAButton from './CTAButton'

function TestimonialSlider({ testimonials })
{
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    swipeToSlide: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <Box maxW="6xl" mx="auto" my={["4", "4", "16"]}>
      <Heading as="h2" textAlign="center" fontSize="4xl" fontWeight="semibold" mb="4">Snippets from testimonials:</Heading>
      <Box p={["4", "4", "8"]} bgColor="gray.200" boxShadow="xl" >
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box outline="none" key={testimonial.id}>
              <Stack
                direction={["column", null, "row"]}
                px="2"
              >
                <Box h="100px" w="100px" borderRadius="full" >
                  <Box as={GatsbyImage} image={getImage(testimonial.avatar)} alt={testimonial.author} h="100px" w="100px" borderRadius="full" />
                </Box>
                <Box flexShrink="1">
                  <Text mb="2">
                    <b>{testimonial.author} - </b>{testimonial.jobTitle}
                  </Text>
                  {/* <Stack direction={["column", null, "row"]}>
                    <Text as="strong">{testimonial.author}</Text>
                    <Text>{testimonial.jobTitle}</Text>
                  </Stack> */}
                  <Text as="em">"{testimonial.excerpt.excerpt}"</Text>

                  {/* {!!testimonial.excerpt && <Content as="em" text={testimonial.excerpt} />} */}
                </Box>

              </Stack>
            </Box>

            // <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </Box>
      <Box pt="8" textAlign="center">
        <CTAButton text="Read more testimonials" url="/testimonials" />
      </Box>
    </Box>
  );
}

export default TestimonialSlider;

function NextArrow({ className, style, onClick })
{
  return (
    <IconButton
      pos="absolute"
      top="50%"
      right="0"
      variant="ghost"
      transform="translateY(-50%)"
      onClick={onClick}
      icon={<FaChevronRight />}
    />
  )
}
function PrevArrow({ className, style, onClick })
{
  return (
    <IconButton
      pos="absolute"
      top="50%"
      left="0"
      variant="ghost"
      transform="translateY(-50%)"
      onClick={onClick}
      icon={<FaChevronLeft />}
    />
  )
}