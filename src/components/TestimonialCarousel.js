import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Content from './Content'

function TestimonialCarousel({ testimonials })
{

  const [[page, direction], setPage] = useState([0, 0]);

  const variants = {
    enter: (direction) =>
    {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) =>
    {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const paginate = (newDirection) =>
  {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Flex
      flexDir="row"
      bgColor="gray.300"
      maxW="2xl"
      mx="auto"
      w="100%"
      p="8"
      alignItems="center"
    >
      <IconButton icon={<FaChevronLeft />} variant="link" onClick={() => paginate(-1)} />
      <Box
        flexGrow="1"
        pos="relative"
        mx="4"
        overflowX="hidden"
        h="200px"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            // src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          // drag="x"
          // dragConstraints={{ left: 0, right: 0 }}
          // dragElastic={1}
          // onDragEnd={(e, { offset, velocity }) =>
          // {
          //   const swipe = swipePower(offset.x, velocity.x);

          //   if (swipe < -swipeConfidenceThreshold)
          //   {
          //     paginate(1);
          //   } else if (swipe > swipeConfidenceThreshold)
          //   {
          //     paginate(-1);
          //   }
          // }}
          >
            <Box pos="absolute" top="0" left="0" h="200px">

              <p>{testimonials[page]?.author}</p>
              <Content text={testimonials[page]?.testimonial} />
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
      <IconButton icon={<FaChevronRight />} variant="link" onClick={() => paginate(1)} />

    </Flex>
  );
}

export default TestimonialCarousel;