const { ChakraProvider } = require('@chakra-ui/react')
const React = require('react')
const { default: theme } = require('./src/@chakra-ui/gatsby-plugin/theme')
const { default: Layout } = require('./src/components/Layout')
const { default: Fonts } = require('./src/styles/Fonts')

exports.wrapPageElement = ({ element, props }) =>
{
  return (
    <>
      <Fonts />
      <Layout {...props}>
        {element}
      </Layout>
    </>
  )
}

exports.wrapRootElement = ({ element }) =>
{
  return (
    <ChakraProvider theme={theme}>
      {element}
    </ChakraProvider>
  )
}