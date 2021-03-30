import React from 'react';
import PageLayout from '../components/PageLayout';
import { graphql } from 'gatsby'
import TestimonialCard from '../components/TestimonialCard';
import { SimpleGrid } from '@chakra-ui/react';
import CTABlock from '../components/CTABlock'

function Testimonials({ data })
{
  return (
    <PageLayout pageTitle="Testimonials">
      <SimpleGrid columns={[1, null, null, 2]} spacing="10">
        {data.contentfulTestimonialsPage.testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </SimpleGrid>
      <CTABlock
        text="Want to talk about a project?"
        buttonText="Let's Chat"
        buttonTo="/contact"
      />
    </PageLayout>
  );
}

export default Testimonials;

export const query = graphql`
  query TestimonialQuery {
    contentfulTestimonialsPage {
      title
      testimonials {
        id
        author
        jobTitle
        testimonial{
          childMarkdownRemark {
            html
          }
        }
        avatar {
          gatsbyImageData
        }
      }
    }
  }
`