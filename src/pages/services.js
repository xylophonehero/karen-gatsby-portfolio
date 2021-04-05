import { SimpleGrid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import FAQs from '../components/FAQs';
import PageLayout from '../components/PageLayout';
import PricingBlocks from '../components/PricingBlocks';
import ServicesCard from '../components/ServicesCard';
import CTABlock from '../components/CTABlock'

function Services({ data })
{
  const pageData = data.contentfulServicesPage

  return (
    <PageLayout pageTitle={pageData.title}>
      <SimpleGrid columns={[1, 2, 3, 4]} gap="8">
        {pageData.services.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </SimpleGrid>
      <PricingBlocks
        blockPricings={pageData.blockPricings}
        pricings={pageData.pricings}
        afterBlock={pageData.afterBlock}
        afterPricing={pageData.afterPricing}
      />
      <CTABlock
        text="Want to talk about a project?"
        buttonText="Let's Chat"
        buttonTo="/contact"
      />
      <FAQs faqs={pageData.faqs} />
    </PageLayout>
  );
}

export default Services;

export const query = graphql`
  query ServicesQuery {
    contentfulServicesPage {
      title
      services {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      faqs {
        id
        question
        answer {
          childMarkdownRemark {
            html
          }
        }
      }
      blockPricings {
        id
        name
        blurb {
          childMarkdownRemark {
            html
          }
        }
        pounds
        fullPricePounds
        dollars
        fullPriceDollars
        features
      }
      afterBlock {
        childMarkdownRemark {
          html
        }
      }
      pricings {
        id
        name
        blurb {
          childMarkdownRemark {
            html
          }
        }
        pounds
        fullPricePounds
        dollars
        fullPriceDollars
        features
      }
      afterPricing {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`