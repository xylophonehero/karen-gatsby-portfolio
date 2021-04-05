import { Box, Heading, Grid, GridItem, Icon, Text, Flex, Switch, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Content from './Content';

function PricingBlocks({ blockPricings, pricings, afterBlock, afterPricing })
{
  const [inPounds, setInPounds] = useState(true)

  const features = pricings[pricings.length - 1].features

  return (
    <Box pt="16" px="8" w="100%">
      <Heading color="gray.600" textAlign="center" mb="8">Pricing</Heading>
      <Flex w="full" justify="center" alignItems="flex-end" mb="4">
        <Text>Pricing in $</Text>
        <Switch px="4" colorScheme="teal" isChecked={inPounds} onChange={() => setInPounds(!inPounds)} />
        <Text>Pricing in £</Text>
      </Flex>
      <Text textAlign="center" mb="8">Prices per 500 words</Text>
      <SimpleGrid columns={[1, 1, 2]} gap="8" mb="8">
        {blockPricings.map((pricing) => (
          <PricingCard key={pricing.id} {...pricing} inPounds={inPounds} />
        ))}
      </SimpleGrid>
      <Content text={afterBlock} />
      <SimpleGrid columns={[1, 1, 2]} gap="8" my="8" display={["grid", null, "none"]}>
        {pricings.map((pricing) => (
          <PricingCard key={pricing.id} {...pricing} inPounds={inPounds} />
        ))}
      </SimpleGrid>

      <Grid
        className="pricing-grid"
        templateColumns={["minmax(250px, 1fr) repeat(3,1fr)", null, null, "minmax(400px, 1fr) repeat(3,1fr)"]}
        display={["none", null, "grid"]}
        boxShadow="lg"
        borderRadius="lg"
        my="8"
      >
        {features.map((feature, index) => (
          <GridItem key={feature} colStart={1} rowStart={4 + index} borderTop="solid 1px">
            <Text py="2" pl="6">{feature}</Text>
          </GridItem>
        ))}
        {pricings.map((pricing, index) => (
          <React.Fragment key={pricing.id}>
            <GridItem colStart={index + 2} rowStart={1} borderLeft="solid 1px" p="2">
              <Text textAlign="center" fontWeight="semibold" fontSize="2xl">{pricing.name}</Text>
            </GridItem>
            <GridItem colStart={index + 2} rowStart={2} borderLeft="solid 1px" p="2">
              <Content text={pricing.blurb} />
            </GridItem>
            <GridItem colStart={index + 2} rowStart={3} borderLeft="solid 1px" p="2" textAlign="center">
              <Text as="s" fontWeight="semibold" fontSize="xl">
                {format({
                  amount: inPounds ? pricing.fullPricePounds : pricing.fullPriceDollars,
                  currency: inPounds ? 'GBP' : 'USD'
                })}
              </Text>
              <Text fontWeight="semibold" fontSize="3xl">
                {format({
                  amount: inPounds ? pricing.pounds : pricing.dollars,
                  currency: inPounds ? 'GBP' : 'USD'
                })}
              </Text>
            </GridItem>
            {features.map((feature, featureIndex) => (
              <GridItem key={feature} colStart={index + 2} rowStart={4 + featureIndex} borderTop="solid 1px" borderLeft="solid 1px">
                <Flex w="full" h="full" justify="center" alignItems="center">
                  {(pricing.features.some(x => x === feature)) && <Icon as={FaCheck} />}
                </Flex>
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Content text={afterPricing} />
    </Box>
  );
}

export default PricingBlocks;

function PricingCard({ name, blurb, pounds, fullPricePounds, dollars, fullPriceDollars, features, inPounds })
{
  return (
    <Flex
      flexDirection="column"
      p="4"
      boxShadow="lg"
      borderRadius="xl"
    // maxW="500px"
    >
      <Text textAlign="center" fontWeight="semibold" fontSize="2xl" mb="4">{name}</Text>
      <Content text={blurb} />
      <Box textAlign="center">
        <Text as="s" fontWeight="semibold" fontSize="xl" display="inline-block" mr="4" >
          {format({
            amount: inPounds ? fullPricePounds : fullPriceDollars,
            currency: inPounds ? 'GBP' : 'USD'
          })}
        </Text>
        <Text fontWeight="semibold" fontSize="3xl" display="inline-block">
          {format({
            amount: inPounds ? pounds : dollars,
            currency: inPounds ? 'GBP' : 'USD'
          })}
        </Text>
      </Box>
      {!!features &&
        <>
          <hr />
          <Box p="4">
            {features.map((feature) => (
              <Text key={feature}><Icon as={FaCheck} mr="2" />{feature}</Text>
            ))}
          </Box>
        </>
      }
    </Flex>
  )
}


function format({ amount, currency })
{
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format((amount / 100).toFixed(2));
}