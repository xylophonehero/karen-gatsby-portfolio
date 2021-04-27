import
{
  SimpleGrid,

} from '@chakra-ui/react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { graphql } from 'gatsby';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioFilter from '../components/PortfolioFilter';
import CTABlock from '../components/CTABlock'

function Portfolio({ data })
{
  const [filter, setFilter] = useState("Highlights")

  const handleClick = (name) =>
  {
    setFilter(name)
  }

  const filteredPortfolio = filter === "All"
    ? data.contentfulPortfolioPage.portfolioItems :
    data.contentfulPortfolioPage.portfolioItems.filter(x => x.categories?.some(y => y.name === filter))

  return (
    <PageLayout pageTitle="Portfolio">
      <AnimateSharedLayout>
        <SimpleGrid columns={[2, 2, 4]} spacing={[4, 8]} mb="8">
          {data.contentfulPortfolioPage.categories.map((category) => (
            <PortfolioFilter key={category.id} name={category.name} handleClick={handleClick} filter={filter} />
          ))}
          <PortfolioFilter name="All" handleClick={handleClick} filter={filter} />
        </SimpleGrid>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <SimpleGrid
          columns={[1, 2, 2, 3, 4]}
          spacing={10}
        >
          <AnimatePresence>
            {filteredPortfolio.map((item) =>
            (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </AnimatePresence>
        </SimpleGrid>
      </AnimateSharedLayout>
      <CTABlock
        text="Want to talk about a project?"
        buttonText="Let's Chat"
        buttonTo="/contact"
      />
    </PageLayout>
  );
}

export default Portfolio;

export const query = graphql`
  query PortfolioQuery {
    contentfulPortfolioPage {
      title
      categories {
        name
        id
      }
      portfolioItems{
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