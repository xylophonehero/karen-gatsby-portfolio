import { Text } from '@chakra-ui/layout';
import React from 'react';

function Content({ text, ...props })
{
  return (
    <Text className="content" {...props} dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }} />
  );
}

export default Content