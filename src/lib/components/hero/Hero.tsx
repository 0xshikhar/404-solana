import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { LINK_WAITLIST } from '../../constants';
import Navbar from '../NavBar';
import BannerImage from '~/../public/images/hero/banner_3200x_tinified.jpg';
import TitleImage from '~/../public/images/hero/text_1200x_tiny.png';

const Hero = () => {
  return (
    <Box>
      <Navbar />
      <Box
        position="relative"
        pt="150px"
        pb={{ base: '510px', sm: '700px' }}
        bgColor="4C92EC"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
          bg="#4894e9" // This will be visible while the image is loading
        >
          <Image
            src={BannerImage}
            alt="main banner background"
            fill
            objectFit="cover"
            priority
            quality={100} // must set this to avoid blury image. normall you can set between 75 ~ 100
          />
        </Box>
        <Box display="flex" justifyContent="center" px="20px">
          <Image
            src={TitleImage}
            alt="main title"
            width={900}
            height={600}
            priority
            quality={90}
          />
        </Box>
        <Box
          position="absolute"
          bottom={{ base: '120px', sm: '170px' }}
          width="100%"
          display="flex"
          justifyContent="center"
          px="10px"
        >
          <Button
            className="cta-button"
            as="a"
            href={LINK_WAITLIST}
            target="_blank"
            fontWeight="500"
            bg="#DD2424"
            boxShadow="0px 6px 0px #000000"
            border="2px solid #000000"
            borderRadius="18px"
            h={{ base: '50px', xl: '60px' }}
            px={{ base: '40px', xl: '40px' }}
            _hover={{
              bg: '#FF3737',
              transform: 'scale(1.05)',
            }}
            transition="all 0.2s ease-in-out"
          >
            <Text
              color="white"
              textShadow="2px 2px black"
              fontSize={{ base: '24px', xl: '28px' }}
            >
              Join waitlist
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
