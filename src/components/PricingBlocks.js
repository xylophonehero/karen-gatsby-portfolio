import { Box, Heading, Grid, GridItem, Icon, Text, Flex, Switch } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Content from './Content';

function PricingBlocks({ pricings })
{
  const [pounds, setPounds] = useState(true)

  const features = pricings[pricings.length - 1].features

  return (
    <Box p="16" w="100%">
      <Heading textAlign="center" mb="8">Pricing</Heading>
      <Flex w="full" justify="center" alignItems="flex-end" mb="8">
        <Text>Pricing in $</Text>
        <Switch px="4" colorScheme="teal" isChecked={pounds} onChange={() => setPounds(!pounds)} />
        <Text>Pricing in £</Text>
      </Flex>
      <Grid
        className="pricing-grid"
        templateColumns="repeat(5,1fr)"
      >
        {features.map((feature, index) => (
          <GridItem key={feature} colStart={1} colSpan={2} rowStart={4 + index} borderTop="solid 1px">
            <Text py="2">{feature}</Text>
          </GridItem>
        ))}
        {pricings.map((pricing, index) => (
          <React.Fragment key={pricing.id}>
            <GridItem colStart={index + 3} rowStart={1} borderLeft="solid 1px" p="2">
              <Text fontWeight="semibold" fontSize="2xl">{pricing.name}</Text>
            </GridItem>
            <GridItem colStart={index + 3} rowStart={2} borderLeft="solid 1px" p="2">
              <Content text={pricing.blurb} />
            </GridItem>
            <GridItem colStart={index + 3} rowStart={3} borderLeft="solid 1px" p="2">
              <Text fontWeight="semibold" fontSize="3xl">
                {format({
                  amount: pounds ? pricing.pounds : pricing.dollars,
                  currency: pounds ? 'GBP' : 'USD'
                })}
              </Text>
            </GridItem>
            {features.map((feature, featureIndex) => (
              <GridItem key={feature} colStart={index + 3} rowStart={4 + featureIndex} borderTop="solid 1px" borderLeft="solid 1px">
                <Flex w="full" h="full" justify="center" alignItems="center">
                  {(pricing.features.some(x => x === feature)) && <Icon as={FaCheck} />}
                </Flex>
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}

export default PricingBlocks;

function format({ amount, currency })
{
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format((amount / 100).toFixed(2));
}