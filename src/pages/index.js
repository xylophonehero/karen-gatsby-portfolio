import React from "react"
import { graphql } from 'gatsby'

import Hero from "../components/Hero"
import FeaturedIn from "../components/FeaturedIn"
// import HomeLinkBlock from "../components/HomeLinkBlock"
import CTABlock from '../components/CTABlock'
import TestimonialSlider from "../components/TestimonialSlider"
import { Box, SimpleGrid, Heading, Container, Flex } from "@chakra-ui/react"
import PortfolioCard from "../components/PortfolioCard"
import CTAButton from "../components/CTAButton"
// import TestimonialCarousel from "../components/TestimonialCarousel"
// import Layout from '../components/Layout'

export default function Home({ data })
{
  return (
    <>
      <Hero {...data.contentfulHomePage.homeHero} />
      <FeaturedIn />
      <Box h="2" bgGradient="linear(to-r, teal.500, cyan.500)" />
      {/* <TestimonialCarousel testimonials={data.contentfulTestimonialsPage.testimonials} /> */}
      <TestimonialSlider testimonials={data.contentfulHomePage.featuredTestimonials} />
      <Box h="2" bgGradient="linear(to-r, teal.500, cyan.500)" />
      <Container size="large" p="8" centerContent>
        <Heading as="h2" fontSize="4xl" mb="8">Portfolio highlights</Heading>
        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={10} mb="8">
          {data.contentfulHomePage.featuredPortfolios.map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </SimpleGrid>
        <CTAButton text="See more" url="/portfolio" />
      </Container>
      <Box h="2" bgGradient="linear(to-r, teal.500, cyan.500)" />
      <Flex w="full" justify="center">
        <CTABlock
          text="Want to talk about a project?"
          buttonText="Let's Chat"
          buttonTo="/contact"
        />
      </Flex>
    </>
  )
}

export const query = graphql`
  query HomePage {
    contentfulHomePage{
      homeHero {
        headline
        description {
          description
          childMarkdownRemark {
            html
          }
        }
        background {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 40
          )
        }
        profile {
          gatsbyImageData
        }
      }
      featuredTestimonials {
        id
        author
        jobTitle
        excerpt {
          excerpt
          childMarkdownRemark {
            html
          }
        }
        avatar {
          gatsbyImageData
        }
      }
      featuredPortfolios{
        id
        title
        tagline
        description {
          description
          childMarkdownRemark{
            html
          }
        }
        thumb{
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
        mainMedia{
          gatsbyImageData(
            placeholder: BLURRED
          )
          file{
            url
          }
        }
        link
        pdf{
          file{
            url
          }
        }
        categories {
          name
        }
      }
    }
  }
`
