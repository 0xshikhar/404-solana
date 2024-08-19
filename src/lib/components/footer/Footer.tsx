import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { LINK_TELEGRAM, LINK_TWITTER } from '../../constants';

const Footer = () => {
  return (
    <Box bg="#090515">
      <Box maxW="1200px" mx="auto" px="14px">
        <Box
          display="flex"
          justifyContent="space-between"
          borderBottom="1px solid #2a2a38"
          pb="40px"
          pt={{ md: '200px', base: '100px' }}
          flexDirection={{ md: 'row', base: 'column' }}
        >
          <Box
            display="flex"
            flexDirection={{ md: 'row', base: 'column' }}
            gap={{ md: '100px', base: '50px' }}
            alignItems={{ md: 'start', base: 'center' }}
          >
            <Box>
              <Text
                as="h2"
                color="#fff"
                fontSize={{ md: '28px', base: '22px' }}
                marginBottom={{ md: '28px', base: '18px' }}
                textAlign={{ md: 'start', base: 'center' }}
              >
                Company
              </Text>
              <Box
                display="flex"
                gap={{ md: '20px', base: '14px' }}
                flexDirection="column"
              >
                <Text
                  as="a"
                  href="#about"
                  color="#a7a5ab"
                  fontSize={{ md: '18px', base: '16px' }}
                  textAlign={{ md: 'start', base: 'center' }}
                  className="font-nutino"
                >
                  About Angry Pets
                </Text>
                <Text
                  as="a"
                  href="#tokenomics"
                  color="#a7a5ab"
                  fontSize={{ md: '18px', base: '16px' }}
                  textAlign={{ md: 'start', base: 'center' }}
                  className="font-nutino"
                >
                  Tokenomics
                </Text>
                <Text
                  as="a"
                  href="#presale"
                  color="#a7a5ab"
                  fontSize={{ md: '18px', base: '16px' }}
                  textAlign={{ md: 'start', base: 'center' }}
                  className="font-nutino"
                >
                  Presale
                </Text>
                <Text
                  as="a"
                  href="#faqs"
                  color="#a7a5ab"
                  fontSize={{ md: '18px', base: '16px' }}
                  textAlign={{ md: 'start', base: 'center' }}
                  className="font-nutino"
                >
                  FAQs
                </Text>
              </Box>
            </Box>
            <Box>
              <Text
                as="h2"
                color="#fff"
                fontSize={{ md: '28px', base: '22px' }}
                marginBottom={{ md: '28px', base: '18px' }}
                textAlign={{ md: 'start', base: 'center' }}
              >
                DISCLAIMER
              </Text>
              <Box maxW="500px">
                <Text
                  as="p"
                  color="#a7a5ab"
                  fontSize={{ md: '18px', base: '16px' }}
                  textAlign={{ md: 'start', base: 'center' }}
                  className="font-nutino"
                >
                  $ANGRY is a meme coin with no intrinsic value or expectation
                  of financial return. $ANGRY is completely useless and for
                  entertainment purposes only. Trading crypto, especially
                  memecoins, involves significant risk and potential capital
                  loss. Memecoins can be extremely volatile. Conduct thorough
                  research. When you trade or purchase $ANGRY, you are agreeing
                  that you have seen this disclaimer.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            mt={{ md: '0', base: '50px' }}
          >
            <Box width={{ md: '175px', base: '130px' }}>
              <Image
                src="/images/hero/cat-logo.png"
                alt="CatLogo"
                width={175}
                height={125}
              />
            </Box>
            <Box mt="40px" display="flex" gap="15px">
              <Button
                as="a"
                href={LINK_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                bg="#00000059"
                border="1px solid #ffffff26"
                backdropFilter="blur(12.5px)"
                borderRadius="50%"
                width="46px"
                h="46px"
                padding="0"
              >
                <FaTelegramPlane color="#fff" fontSize="21px" />
              </Button>
              <Button
                as="a"
                href={LINK_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                bg="#00000059"
                border="1px solid #ffffff26"
                backdropFilter="blur(12.5px)"
                borderRadius="50%"
                width="46px"
                h="46px"
                padding="0"
              >
                <FaXTwitter color="#fff" fontSize="21px" />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt="30px"
          pb="20px"
          gap="20px"
          flexWrap="wrap"
          flexDirection={{ md: 'row', base: 'column' }}
        >
          <Text
            as="p"
            fontSize={{ md: '16px', base: '14px' }}
            color="#a9a7ad"
            fontWeight="400"
            className="font-nutino"
          >
            © 2024 Angry Pets. All rights reserved.
          </Text>
          {/* <Text
            fontSize={{ md: '16px', base: '14px' }}
            color="#a9a7ad"
            fontWeight="400"
          >
            Privacy Policy • Terms & Conditions
          </Text> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
