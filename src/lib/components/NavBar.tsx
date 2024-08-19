import {
  Box,
  Flex,
  Image,
  Link,
  Button,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { RiMenu3Line } from 'react-icons/ri';

import { LINK_TELEGRAM, LINK_TWITTER, LINK_WAITLIST } from '../constants';
// import '@fontsource/luckiest-guy';

const Navbar = () => {
  return (
    <Box
      bg="transparent"
      px={{ sm: '20px', base: '14px' }}
      position="absolute"
      top="0"
      zIndex="1"
      w="100%"
    >
      <Flex
        width="100%"
        maxW="1440px"
        mx="auto"
        height="120px"
        alignItems="center"
        justifyContent="space-between"
        pt={{ md: '40px', base: '10px' }}
      >
        <Flex alignItems="center">
          <Image
            src="/images/hero/cat-logo.png"
            alt="Logo"
            w={{ xl: '140px', md: '120px', base: '90px' }}
          />
        </Flex>
        <Box display={{ lg: 'flex', base: 'none' }} gap="70px">
          <Flex alignItems="center" mt="10px">
            <Link
              href="#about"
              mx={{ xl: '20px', base: '14px' }}
              color="white"
              fontSize={{ xl: '24px', base: '20px' }}
              textShadow="1px 2px 0px #000000"
              textDecoration="none"
              _hover={{ color: '#F5B61B' }}
            >
              About
            </Link>
            <Link
              href="#presale"
              mx={{ xl: '20px', base: '14px' }}
              color="white"
              fontSize={{ xl: '24px', base: '20px' }}
              textShadow="1px 2px 0px #000000"
              textDecoration="none"
              _hover={{ color: '#F5B61B' }}
            >
              Presale
            </Link>
            <Link
              href="#tokenomics"
              mx={{ xl: '20px', base: '14px' }}
              color="white"
              fontSize={{ xl: '24px', base: '20px' }}
              textShadow="1px 2px 0px #000000"
              textDecoration="none"
              _hover={{ color: '#F5B61B' }}
            >
              ANGRYNOMICS
            </Link>

            <Link
              href="#faqs"
              mx={{ xl: '20px', base: '14px' }}
              color="white"
              fontSize={{ xl: '24px', base: '20px' }}
              textShadow="1px 2px 0px #000000"
              textDecoration="none"
              _hover={{ color: '#F5B61B' }}
            >
              FAQs
            </Link>
          </Flex>
          <HStack gap={{ xl: '30px', base: '20px' }} alignItems="center">
            <Box display="flex" gap={{ xl: '20px', base: '14px' }}>
              <Box
                as="a"
                href={LINK_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                bg="#F5B61B"
                border="2px solid #000000"
                boxShadow="0px 6px 0px #000000"
                borderRadius="50%"
                w={{ xl: '60px', base: '50px' }}
                h={{ xl: '60px', base: '50px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#000"
                _hover={{ bg: '#FFC945', transform: 'scale(1.1)' }}
                transition="transform 0.2s ease-in-out"
              >
                <BiLogoTelegram size={25} />
              </Box>
              <Box
                as="a"
                href={LINK_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                bg="#F5B61B"
                border="2px solid #000000"
                boxShadow="0px 6px 0px #000000"
                borderRadius="50%"
                w={{ xl: '60px', base: '50px' }}
                h={{ xl: '60px', base: '50px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#000"
                _hover={{ bg: '#FFC945', transform: 'scale(1.1)' }}
                transition="transform 0.2s ease-in-out"
              >
                <FaXTwitter size={25} />
              </Box>
            </Box>
            <Button
              as="a"
              href={LINK_WAITLIST}
              target="_black"
              bg="#F5B61B"
              boxShadow="0px 6px 0px #000000"
              border="2px solid #000000"
              borderRadius="18px"
              h={{ xl: '60px', base: '50px' }}
              display={{ base: 'none', lg: 'inline-flex' }}
              _hover={{ bg: '#FFC945', transform: 'scale(1.1)' }}
              transition="transform 0.2s ease-in-out"
            >
              <Text
                color="white"
                textShadow="2px 2px black"
                fontSize={{ xl: '28px', base: '22px' }}
              >
                Join Waitlist
              </Text>
            </Button>
          </HStack>
        </Box>
        <Flex
          display={{ lg: 'none', base: 'flex' }}
          alignItems="center"
          gap="10px"
        >
          <Button
            as="a"
            href={LINK_WAITLIST}
            bg="#F5B61B"
            boxShadow="0px 6px 0px #000000"
            border="2px solid #000000"
            borderRadius="18px"
            h={{ base: '40px' }}
          >
            <Text
              color="white"
              textShadow="2px 2px black"
              fontSize={{ base: '18px' }}
            >
              Join Waitlist
            </Text>
          </Button>
          <Menu>
            <MenuButton as={Button} bg="#F5B61B" px="10px">
              <RiMenu3Line color="#000" size={24} />
            </MenuButton>
            <MenuList
              border="2px solid #000"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
              borderRadius="12px"
              mt="4px"
              zIndex="10"
              p="10px"
            >
              <MenuItem px="0">
                <Link
                  href="#about"
                  color="#F5B61B"
                  px="20px"
                  fontSize="xl"
                  textShadow="1px 2px 0px #111"
                  textDecoration="none"
                  w="100%"
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem px="0">
                <Link
                  href="#tokenomics"
                  color="#F5B61B"
                  px="20px"
                  fontSize="xl"
                  textShadow="1px 2px 0px #000000"
                  textDecoration="none"
                >
                  Tokenomics
                </Link>
              </MenuItem>
              <MenuItem px="0">
                <Link
                  href="#presale"
                  color="#F5B61B"
                  px="20px"
                  fontSize="xl"
                  textShadow="1px 2px 0px #000000"
                  textDecoration="none"
                >
                  Presale
                </Link>
              </MenuItem>
              <MenuItem px="0">
                <Link
                  href="#faqs"
                  color="#F5B61B"
                  px="20px"
                  fontSize="xl"
                  textShadow="1px 2px 0px #000000"
                  textDecoration="none"
                >
                  FAQs
                </Link>
              </MenuItem>
              <MenuItem px="20px">
                <Box display="flex" gap={{ xl: '20px', base: '14px' }}>
                  <Box
                    as="a"
                    href={LINK_TELEGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F5B61B"
                    border="2px solid #000000"
                    boxShadow="0px 6px 0px #000000"
                    borderRadius="50%"
                    w={{ xl: '60px', base: '50px' }}
                    h={{ xl: '60px', base: '50px' }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="#000"
                  >
                    <BiLogoTelegram size={25} />
                  </Box>
                  <Box
                    as="a"
                    href={LINK_TWITTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F5B61B"
                    border="2px solid #000000"
                    boxShadow="0px 6px 0px #000000"
                    borderRadius="50%"
                    w={{ xl: '60px', base: '50px' }}
                    h={{ xl: '60px', base: '50px' }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="#000"
                  >
                    <FaXTwitter size={25} />
                  </Box>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
