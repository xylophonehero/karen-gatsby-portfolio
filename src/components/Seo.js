import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { graphql, StaticQuery } from "gatsby"
const SEO = ({ title, description, image, article }) =>
{
  const { pathname } = useLocation()
  // const { data } = useStaticQuery(query)

  return (
    < StaticQuery
      query={query}
      render={(data) => 
      {
        const {
          defaultTitle,
          // titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
        } = data.contentfulConfig
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription.description,
          image: `${image || defaultImage.file.url}`,
          url: `${siteUrl}${pathname}`,
        }
        return (
          <Helmet
            title={seo.title}
          // titleTemplate={titleTemplate}
          >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {/* {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )} */}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        )
      }}
    />
  )
}
export default SEO

const query = graphql`query SEO {
  contentfulConfig {
    defaultTitle: title
    siteUrl
    defaultDescription: description {
      description
    }
    defaultImage:image {
      file {
        url
      }
    }
  }
}`