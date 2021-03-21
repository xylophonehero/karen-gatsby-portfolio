import { SimpleGrid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import PageLayout from '../components/PageLayout';
import ServicesCard from '../components/ServicesCard';

function Services({ data })
{
  return (
    <PageLayout pageTitle={data.contentfulServicesPage.title}>
      <SimpleGrid columns={[1, 2, 3, 4]} gap="8">
        {data.contentfulServicesPage.services.map((service) => (
          <ServicesCard {...service} />
        ))}
      </SimpleGrid>
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
    }
  }
`