import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

import Cat1 from '../../../../public/images/roadmap/cat1.png';
import Cat2 from '../../../../public/images/roadmap/cat2.png';
import Cat3 from '../../../../public/images/roadmap/cat3.png';
import Check from '../../../../public/images/roadmap/check.png';
import Arrow from '../../../../public/images/roadmap/right-arrow.png';

const Roadmap = () => {
  return (
    <Box>
      <Box
        className="roadmap-bg"
        bgRepeat="no-repeat"
        bgSize="cover"
        mb={{ md: '20px', base: '10px' }}
        px={{ md: '20px', base: '10px' }}
      >
        <Box
          maxW="1400px"
          mx="auto"
          p={{ xl: '160px 0', lg: '100px 0 140px 0', base: '60px 0 100px 0' }}
        >
          <Text
            as="h2"
            textShadow="6px 6px 0px #000000"
            fontSize={{ xl: '78px', lg: '68px', md: '50px', base: '40px' }}
            color="#fff"
            pb="40px"
          >
            ANGRY Roadmap
          </Text>
          <Box
            display={{ lg: 'flex', base: 'grid' }}
            gridTemplateColumns={{ lg: 'repeat(3,1fr)', sm: 'repeat(2,1fr)' }}
            gap={{ lg: '0', md: '50px', base: '20px' }}
            mr={{ lg: '20px', base: '10px' }}
          >
            <Box
              w={{ lg: '33.33%' }}
              position="relative"
              boxShadow={{
                lg: '20px 20px 0px #000000',
                base: '10px 10px 0px #000000',
              }}
              border="4px solid #000"
              borderRadius="28px"
              bg="#FFF7CE"
              padding={{ md: '20px', base: '12px' }}
              pb={{ lg: '40px' }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb="20px"
              >
                <Text
                  as="h2"
                  fontSize={{ xl: '28px', md: '22px', base: '18px' }}
                >
                  Go Grumpy
                </Text>
              </Box>
              <Box>
                <Image src={Cat1} alt="Cat1" className="cat-img" />
              </Box>
              <Box
                px={{ '2xl': '10px' }}
                display="flex"
                gap="10px"
                flexDirection="column"
                mt="30px"
              >
                <Box display="flex" alignItems="start" gap="10px">
                  <Box minW="26px" minH="26px" mt="4px">
                    <Image src={Check} alt="Check" />
                  </Box>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Develop ERC404Meme standard
                  </Text>
                </Box>
                <Box display="flex" alignItems="start" gap="10px">
                  <Box minW="26px" minH="26px" mt="4px">
                    <Image src={Check} alt="Check" />
                  </Box>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Create NFT Artworks
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={{ lg: 'flex', base: 'none' }}
              alignItems="center"
              mr="-26px"
              position="relative"
            >
              <Box
                height="4px"
                borderTop="4px dashed #000"
                w="100%"
                position="absolute"
                top="60px"
              />
              <Button
                bg="#FFC945"
                boxShadow="0px 6px 0px #000000"
                border="3px solid #000000"
                w={{ '2xl': '94px', lg: '70px', base: '55px' }}
                h={{ '2xl': '94px', lg: '70px', base: '55px' }}
                borderRadius="50%"
                ml="4px"
                position="relative"
                zIndex="1"
                px={{ lg: '16px', base: '10px' }}
              >
                <Image src={Arrow} alt="Arrow" />
              </Button>
            </Box>
            <Box
              w={{ lg: '33.33%' }}
              position="relative"
              boxShadow={{
                lg: '20px 20px 0px #000000',
                base: '10px 10px 0px #000000',
              }}
              border="4px solid #000"
              borderRadius="28px"
              bg="#FFF7CE"
              padding={{ md: '20px', base: '12px' }}
              pb={{ lg: '40px' }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb="20px"
              >
                <Text
                  as="h2"
                  fontSize={{ xl: '28px', md: '22px', base: '18px' }}
                  ml={{ xl: '40px' }}
                >
                  Go Angry
                </Text>
                <Text
                  as="p"
                  fontSize={{ xl: '28px', md: '22px', base: '18px' }}
                  mr={{ md: '20px' }}
                >
                  Now
                </Text>
              </Box>
              <Image src={Cat2} alt="Cat2" className="cat-img" />
              <Box
                px={{ '2xl': '10px' }}
                display="flex"
                gap="10px"
                flexDirection="column"
                mt="30px"
              >
                <Box display="flex" alignItems="start" gap="5px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Presale
                  </Text>
                </Box>
                <Box display="flex" alignItems="start" gap="10px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    DEX, CEX listings
                  </Text>
                </Box>
                <Box display="flex" alignItems="start" gap="10px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Conquer 404 pages of CEXs, Block Explorers (Etherscan),
                    DexScreener
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={{ lg: 'flex', base: 'none' }}
              alignItems="center"
              mr="-26px"
              position="relative"
            >
              <Box
                height="4px"
                borderTop="4px dashed #000"
                w="100%"
                position="absolute"
                top="60px"
              />
              <Button
                bg="#FFC945"
                boxShadow="0px 6px 0px #000000"
                border="3px solid #000000"
                w={{ '2xl': '94px', lg: '70px', base: '55px' }}
                h={{ '2xl': '94px', lg: '70px', base: '55px' }}
                borderRadius="50%"
                ml="4px"
                position="relative"
                zIndex="1"
                px={{ lg: '16px', base: '10px' }}
              >
                <Image src={Arrow} alt="Arrow" />
              </Button>
            </Box>
            <Box
              w={{ lg: '33.33%' }}
              position="relative"
              boxShadow={{
                lg: '20px 20px 0px #000000',
                base: '10px 10px 0px #000000',
              }}
              border="4px solid #000"
              borderRadius="28px"
              bg="#FFF7CE"
              padding={{ md: '20px', base: '12px' }}
              pb={{ lg: '40px' }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb="20px"
              >
                <Text
                  as="h2"
                  fontSize={{ xl: '28px', md: '22px', base: '18px' }}
                  ml={{ xl: '40px' }}
                >
                  Go Crazy
                </Text>
              </Box>
              <Image src={Cat3} alt="Cat3" className="cat-img" />
              <Box
                px={{ '2xl': '10px' }}
                display="flex"
                gap="10px"
                flexDirection="column"
                mt="30px"
              >
                <Box display="flex" alignItems="start" gap="10px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Add new characters
                  </Text>
                </Box>
                <Box display="flex" alignItems="start" gap="10px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Launch game
                  </Text>
                </Box>
                <Box display="flex" alignItems="start" gap="10px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Comic series
                  </Text>
                </Box>
                <Box display="flex" alignItems="start" gap="10px">
                  <Text fontSize="26px" mt="4px" marginRight="15px">
                    •
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ '2xl': '22px', lg: '20px', base: '16px' }}
                    className="font-nutino"
                    fontWeight="600"
                  >
                    Conquer 404 pages of Twitter, Google
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
