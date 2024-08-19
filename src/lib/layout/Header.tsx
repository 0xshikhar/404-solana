import { Flex } from '@chakra-ui/react';

import NavBar from '../components/NavBar';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      flexDirection="column"
      position="sticky"
      top="25"
      zIndex="sticky"
    >
      <NavBar />
    </Flex>
  );
};

export default Header;
