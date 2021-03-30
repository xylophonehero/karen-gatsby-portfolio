import React from "react"
import { graphql } from 'gatsby'

import Hero from "../components/Hero"
import FeaturedIn from "../components/FeaturedIn"
import HomeLinkBlock from "../components/HomeLinkBlock"
// import Layout from '../components/Layout'

export default function Home({ data })
{
  return (
    <>
      <Hero {...data.contentfulHero} />
      <FeaturedIn />
      <HomeLinkBlock
        title="Read more about me"
        text={data.contentfulHero.description}
        buttonText="Read more"
        buttonTo="/about"
      >

      </HomeLinkBlock>
    </>
  )
}

export const query = graphql`
  query HomePage {
    contentfulHero {
      headline
      description {
        childMarkdownRemark {
          html
        }
      }
      background {
        gatsbyImageData(
          placeholder: BLURRED
        )
      }
      profile {
        gatsbyImageData
      }
    }
  }
`
