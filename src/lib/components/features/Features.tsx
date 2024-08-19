import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import Faeturepet1 from '../../../../public/images/feature/feature-pet1.png';
import Faeturepet2 from '../../../../public/images/feature/feature-pet2.png';
import Faeturepet3 from '../../../../public/images/feature/feature-pet3.png';
import Faeturepet4 from '../../../../public/images/feature/feature-pet4.png';
import Faeturepet5 from '../../../../public/images/feature/feature-pet5.png';
import Faeturepet6 from '../../../../public/images/feature/feature-pet6.png';
import Rectangle1 from '../../../../public/images/feature/rectangle1.png';
import Rectangle2 from '../../../../public/images/feature/rectangle2.png';
import Rectangle3 from '../../../../public/images/feature/rectangle3.png';
import Rectangle4 from '../../../../public/images/feature/rectangle4.png';
import Rectangle5 from '../../../../public/images/feature/rectangle5.png';
import Rectangle6 from '../../../../public/images/feature/rectangle6.png';

const Features = () => {
  return (
    <Box id="feature" bg="#380000">
      <Box px={{ md: '20px', base: '10px' }}>
        <Text
          as="h2"
          fontSize={{
            xl: '100px',
            lg: '70px',
            md: '60px',
            sm: '50px',
            base: '40px',
          }}
          maxW="767px"
          mx="auto"
          color="#fff"
          textAlign="center"
          lineHeight={{ md: '100px', sm: '60px', base: '50px' }}
          pt={{ xl: '180px', lg: '100px', md: '60px', base: '40px' }}
          pb="60px"
        >
          Features of $ANGRY PETS
        </Text>
        <Box pb="160px">
          <Box
            display={{ lg: 'flex', base: 'grid' }}
            justifyContent={{ lg: 'center' }}
            gap={{ lg: 0, md: '20px', base: '12px' }}
            mb={{ lg: '0', base: '20px' }}
            gridTemplateColumns={{ md: 'repeat(3,1fr)', sm: 'repeat(2,1fr)' }}
          >
            <Box
              position="relative"
              bg={{ lg: 'transparent', base: '#25FF3B' }}
              p={{ lg: 0, base: '20px' }}
            >
              <Box display={{ lg: 'block', base: 'none' }}>
                <Image src={Rectangle1} alt="Rectangle1" />
              </Box>
              <Box
                position={{ lg: 'absolute', base: 'initial' }}
                left={{ xl: '40px', base: '20px' }}
                zIndex="1"
                top="-28px"
                display={{ lg: 'block', base: 'flex' }}
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  w={{ '2xl': 'auto', xl: '280px', base: '200px' }}
                  ml={{ xl: '0', lg: '20px' }}
                >
                  <Image src={Faeturepet1} alt="Faeturepet1" />
                </Box>
                <Text
                  as="h2"
                  fontSize={{
                    '2xl': '56px',
                    xl: '46px',
                    lg: '42px',
                    base: '34px',
                  }}
                  textColor="black"
                  mt="30px"
                  lineHeight={{ lg: '56px', base: '36px' }}
                  textAlign={{ lg: 'start', base: 'center' }}
                >
                  Number <br /> going up
                </Text>
                <Text
                  as="p"
                  maxW="290px"
                  fontSize={{ lg: '18px', base: '16px' }}
                  fontWeight="500"
                  textAlign={{ lg: 'start', base: 'center' }}
                >
                  In a small dark room seeing phone, number going up. green face
                </Text>
              </Box>
            </Box>
            <Box
              position="relative"
              bg={{ lg: 'transparent', base: '#F548E0' }}
              ml={{ '2xl': '-80px', xl: '-70px', lg: '-50px' }}
              display={{ lg: 'block', base: 'flex' }}
              flexDirection="column"
              alignItems="center"
              p={{ lg: 0, base: '20px' }}
            >
              <Box display={{ lg: 'block', base: 'none' }}>
                <Image src={Rectangle2} alt="Rectangle3" />
              </Box>
              <Box
                position={{ lg: 'absolute', base: 'initial' }}
                left={{ xl: '120px', lg: '50px', base: '20px' }}
                zIndex="1"
                top={{ '2xl': '40px', base: '20px' }}
                order={{ lg: '1', base: '2' }}
              >
                <Text
                  as="h2"
                  fontSize={{
                    '2xl': '56px',
                    xl: '46px',
                    lg: '36px',
                    base: '30px',
                  }}
                  textAlign={{ lg: 'start', base: 'center' }}
                  textColor="black"
                  mt={{ xl: '20px', lg: '0', base: '20px' }}
                  lineHeight={{ xl: '56px', base: '40px' }}
                >
                  Make you <br /> REALIZE <br /> the matrix
                </Text>
                <Text
                  as="p"
                  maxW="290px"
                  fontSize={{ xl: '18px', base: '16px' }}
                  fontWeight="500"
                  textAlign={{ lg: 'start', base: 'center' }}
                >
                  Suddenly realize strings are attached to your hands and brain
                </Text>
              </Box>
              <Box
                w={{ '2xl': 'auto', base: '160px' }}
                display="flex"
                justifyContent="end"
                position={{ lg: 'absolute', base: 'initial' }}
                bottom={{ xl: '92px', base: '50px' }}
                right={{ xl: '90px', base: '50px' }}
              >
                <Image src={Faeturepet2} alt="Faeturepet2" />
              </Box>
            </Box>
            <Box
              position="relative"
              bg={{ lg: 'transparent', base: '#FFEE46' }}
              ml={{ '2xl': '-50px', lg: '-30px' }}
              p={{ lg: 0, base: '20px' }}
            >
              <Box display={{ lg: 'block', base: 'none' }}>
                <Image src={Rectangle3} alt="Rectangle3" />
              </Box>
              <Box
                position={{ lg: 'absolute', base: 'initial' }}
                left={{ '2xl': '110px', base: '60px' }}
                zIndex="1"
                top="-140px"
                display={{ lg: 'block', base: 'flex' }}
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  w={{ '2xl': 'auto', xl: '280px', lg: '170px', base: '140px' }}
                  display="flex"
                  justifyContent="end"
                  ml={{ '2xl': '160px', lg: '100px' }}
                >
                  <Image src={Faeturepet3} alt="Faeturepet3" />
                </Box>
                <Text
                  as="h2"
                  fontSize={{
                    '2xl': '56px',
                    xl: '46px',
                    lg: '36px',
                    base: '30px',
                  }}
                  textColor="black"
                  mt="20px"
                  lineHeight={{ xl: '56px', lg: '42px' }}
                  textAlign={{ lg: 'start', base: 'center' }}
                >
                  Make you <br /> FIGHT the <br /> matrix
                </Text>
                <Text
                  as="p"
                  maxW="310px"
                  fontSize={{ xl: '18px', base: '16px' }}
                  textAlign={{ lg: 'start', base: 'center' }}
                >
                  Cuts the strings and break hand cuffs
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display={{ lg: 'flex', base: 'grid' }}
            justifyContent={{ lg: 'center' }}
            gap={{ lg: 0, md: '20px', base: '12px' }}
            gridTemplateColumns={{ md: 'repeat(3,1fr)', sm: 'repeat(2,1fr)' }}
          >
            <Box
              position="relative"
              mt={{ xl: '-42px', lg: '-30px' }}
              bg={{ lg: 'transparent', base: '#439AFF' }}
              p={{ lg: 0, base: '20px' }}
            >
              <Box display={{ lg: 'block', base: 'none' }}>
                <Image src={Rectangle4} alt="Rectangle4" />
              </Box>
              <Box
                position={{ lg: 'absolute', base: 'initial' }}
                left={{ xl: '60px', base: '20px' }}
                zIndex="1"
                top={{ xl: '100px', base: '50px' }}
                display={{ lg: 'block', base: 'flex' }}
                flexDirection="column"
                alignItems="center"
              >
                <Box order={{ lg: '1', base: '2' }}>
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '56px',
                      xl: '46px',
                      lg: '36px',
                      base: '30px',
                    }}
                    textColor="black"
                    mt="20px"
                    lineHeight={{ xl: '56px', base: '40px' }}
                    textAlign={{ lg: 'start', base: 'center' }}
                    display={{ lg: 'block', base: 'none' }}
                  >
                    Make you <br /> BREAK <br /> free
                  </Text>
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '56px',
                      xl: '46px',
                      lg: '36px',
                      base: '30px',
                    }}
                    display={{ lg: 'none', base: 'block' }}
                    textColor="black"
                    mt="20px"
                    lineHeight={{ xl: '56px', base: '40px' }}
                    textAlign={{ lg: 'start', base: 'center' }}
                  >
                    Make you <br /> BREAK free
                  </Text>
                  <Text
                    as="p"
                    maxW={{ lg: '150px', base: 'none' }}
                    fontSize={{ xl: '18px', base: '16px' }}
                    fontWeight="500"
                    textAlign={{ lg: 'start', base: 'center' }}
                  >
                    Open the door, see the brighter world, beach
                  </Text>
                </Box>
                <Box
                  w={{ '2xl': 'auto', xl: '240px', base: '190px' }}
                  position={{ lg: 'absolute', base: 'initial' }}
                  right={{ '2xl': '-198px', xl: '-168px', base: '-160px' }}
                  bottom={{ '2xl': '-121px', xl: '-41px', base: '-64px' }}
                >
                  <Image src={Faeturepet4} alt="Faeturepet4" />
                </Box>
              </Box>
            </Box>
            <Box
              position="relative"
              bg={{ lg: 'transparent', base: '#FF9621' }}
              ml={{ xl: '-50px', lg: '-30px' }}
              mt={{ '2xl': '-100px', xl: '-88px', lg: '-60px' }}
              p={{ lg: 0, base: '20px' }}
            >
              <Box display={{ lg: 'block', base: 'none' }}>
                <Image src={Rectangle5} alt="Rectangle5" />
              </Box>
              <Box
                position={{ lg: 'absolute', base: 'initial' }}
                left={{ xl: '110px', base: '60px' }}
                zIndex="1"
                top={{ '2xl': '120px', xl: '50px', base: '30px' }}
                display={{ lg: 'block', base: 'flex' }}
                flexDirection="column"
                alignItems="center"
              >
                <Box order={{ lg: '1', base: '2' }}>
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '56px',
                      xl: '46px',
                      lg: '36px',
                      base: '30px',
                    }}
                    textColor="black"
                    mt="20px"
                    lineHeight={{ xl: '56px', base: '40px' }}
                    textAlign={{ lg: 'start', base: 'center' }}
                  >
                    Make you <br /> CHANGE the <br /> world!
                  </Text>
                  <Text
                    as="p"
                    maxW={{ xl: '310px', lg: '200px' }}
                    fontSize={{ xl: '18px', base: '16px' }}
                    fontWeight="500"
                    textAlign={{ lg: 'start', base: 'center' }}
                  >
                    In a small dark room seeing phone, number going up. green
                    face
                  </Text>
                </Box>
                <Box
                  w={{ '2xl': 'auto', xl: '280px', lg: '240px', base: '180px' }}
                  position={{ lg: 'absolute', base: 'initial' }}
                  right={{ '2xl': '-218px', lg: '-138px', base: '-168px' }}
                  bottom={{ xl: '-221px', base: '-140px' }}
                >
                  <Image src={Faeturepet5} alt="Faeturepet5" />
                </Box>
              </Box>
            </Box>
            <Box
              position="relative"
              bg={{ lg: 'transparent', base: '#00FFE0' }}
              ml={{ xl: '-80px', lg: '-50px' }}
              mt={{ '2xl': '-170px', xl: '-148px', lg: '-104px' }}
              p={{ lg: 0, base: '20px' }}
              display={{ lg: 'block', base: 'flex' }}
              flexDirection="column"
              alignItems="center"
            >
              <Box display={{ lg: 'block', base: 'none' }}>
                <Image src={Rectangle6} alt="Rectangle5" />
              </Box>
              <Box
                position={{ lg: 'absolute', base: 'initial' }}
                left={{ xl: '100px', base: '50px' }}
                zIndex="1"
                top={{ xl: '126px', base: '40px' }}
                order={{ lg: '1', base: '2' }}
              >
                <Box mb="60px">
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '56px',
                      xl: '46px',
                      lg: '36px',
                      base: '30px',
                    }}
                    textColor="black"
                    mt="20px"
                    lineHeight={{ xl: '56px', base: '40px' }}
                    textAlign={{ lg: 'start', base: 'center' }}
                  >
                    Makes you <br /> stronger
                  </Text>
                  <Text
                    as="p"
                    maxW="258px"
                    fontSize={{ xl: '18px', base: '16px' }}
                    fontWeight="500"
                    textAlign={{ lg: 'start', base: 'center' }}
                  >
                    Open the door, see the brighter world, beach
                  </Text>
                </Box>
              </Box>
              <Box
                w={{ '2xl': 'auto', xl: '240px', base: '200px' }}
                position={{ lg: 'absolute', base: 'initial' }}
                right="30px"
                bottom="4px"
              >
                <Image src={Faeturepet6} alt="Faeturepet6" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
