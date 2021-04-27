import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

function PageLayout({ children, pageTitle, size = "large" })
{
  return (
    <Container centerContent size={size} py={16}>
      <Heading mb={12}>{pageTitle}</Heading>
      {children}
    </Container>
  );
}

export default PageLayout;