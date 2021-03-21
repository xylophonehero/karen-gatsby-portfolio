const React = require('react')
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