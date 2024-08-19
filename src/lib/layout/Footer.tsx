import { Flex, Link, Text } from '@chakra-ui/react';

import { LINK_WEBSITE } from '../constants';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href={LINK_WEBSITE} isExternal rel="noopener noreferrer">
          angrypets.io
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
