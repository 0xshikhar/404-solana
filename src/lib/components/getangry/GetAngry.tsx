import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import Image from 'next/image';

const GetAngry = () => {
  return (
    <Box
      id="presale"
      bg="#8D3248"
      textAlign="center"
      clipPath={{
        '2xl': 'polygon(0 0, 100% 0%, 100% 100%, 0% 94%)',
        xl: 'polygon(0 0, 100% 0%, 100% 100%, 0% 92.4%)',
        lg: 'polygon(0 0, 100% 0%, 100% 100%, 0% 92%)',
        md: 'polygon(0 0, 100% 0%, 100% 100%, 0% 93%)',
        sm: 'polygon(0 0, 100% 0%, 100% 100%, 0% 97%)',
        base: 'polygon(0 0, 100% 0%, 100% 100%, 0% 96%)',
      }}
      pb={{ sm: '280px', base: '150px' }}
    >
      <Image
        src="/images/bg-shape-mobile.png"
        alt="bg-shape"
        width={6000}
        height={120}
        objectFit="cover"
        objectPosition="left"
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        maxW="1440px"
        mx="auto"
        gap={{ xl: '130px', lg: '50px', base: '40px' }}
        mt="70px"
        px="20px"
      >
        <Box w={{ lg: '50%' }}>
          <Image
            src="/images/angry-img.png"
            alt="Cat Image"
            width={765}
            height={1205}
          />
        </Box>
        <Box w={{ lg: '50%', base: '100%' }}>
          <Text
            as="h2"
            fontSize={{
              xl: '100px',
              lg: '70px',
              md: '60px',
              sm: '50px',
              base: '40px',
            }}
            color="white"
            mb={{ xl: '80px', md: '40px', base: '20px' }}
            textShadow="4px 4px 0px #000000"
            transform={{ lg: 'rotate(3.55deg)' }}
            maxW="560px"
            textAlign="left"
            lineHeight={{ xl: '100px', lg: '80px', sm: '60px', base: '50px' }}
          >
            How to get $ANGRY
          </Text>
          <Box
            mr={{ lg: '20px', base: '10px' }}
            bg="#DD2424"
            px={{ xl: '40px', sm: '20px', base: '14px' }}
            pt={{ xl: '70px', base: '40px' }}
            pb={{ xl: '50px', base: '20px' }}
            borderRadius="28px"
            boxShadow={{
              lg: '20px 20px 0px #000000',
              base: '10px 10px 0px #000000',
            }}
            textAlign="left"
            height="auto"
            border="4px solid #000000"
          >
            <Text
              fontSize={{ xl: '48px', lg: '40px', sm: '32px', base: '30px' }}
              fontWeight="500"
              color="#000"
              mb={4}
              textAlign="center"
            >
              Presale Soon
            </Text>
            {/* <Flex
              justify="flex-start"
              align="center"
              mb={4}
              gap={{ lg: '14px', sm: '8px', base: '6px' }}
              display={{ sm: 'flex', base: 'none' }}
            >
              <Box
                as="span"
                color="white"
                p={3}
                fontSize={{ lg: '38px', sm: '30px', base: '20px' }}
                border="2px solid #000"
                borderRadius={{ sm: '20px', base: '12px' }}
                boxShadow="xl"
                w={{ lg: '90px', sm: '70px', base: '44px' }}
                h={{ lg: '90px', sm: '70px', base: '44px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  as="p"
                  textShadow="2px 2px 0px #000000"
                  color="#fff"
                  
                >
                  00
                </Text>
              </Box>
              <Box
                as="span"
                color="white"
                fontSize={{ sm: '28px', base: '20px' }}
                
              >
                :
              </Box>
              <Box
                as="span"
                color="white"
                p={3}
                fontSize={{ lg: '38px', sm: '30px', base: '20px' }}
                border="2px solid #000"
                borderRadius={{ sm: '20px', base: '12px' }}
                boxShadow="xl"
                w={{ lg: '90px', sm: '70px', base: '44px' }}
                h={{ lg: '90px', sm: '70px', base: '44px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  as="p"
                  textShadow="2px 2px 0px #000000"
                  color="#fff"
                  
                >
                  06
                </Text>
              </Box>
              <Box
                as="span"
                color="white"
                fontSize={{ sm: '28px', base: '20px' }}
                
              >
                :
              </Box>
              <Box
                as="span"
                color="white"
                p={3}
                fontSize={{ lg: '38px', sm: '30px', base: '20px' }}
                border="2px solid #000"
                borderRadius={{ sm: '20px', base: '12px' }}
                boxShadow="xl"
                w={{ lg: '90px', sm: '70px', base: '44px' }}
                h={{ lg: '90px', sm: '70px', base: '44px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  as="p"
                  textShadow="2px 2px 0px #000000"
                  color="#fff"
                  
                >
                  37
                </Text>
              </Box>
              <Box
                as="span"
                color="white"
                fontSize={{ sm: '28px', base: '20px' }}
                
              >
                :
              </Box>
              <Box
                as="span"
                color="white"
                p={3}
                fontSize={{ lg: '38px', sm: '30px', base: '20px' }}
                border="2px solid #000"
                borderRadius={{ sm: '20px', base: '12px' }}
                boxShadow="xl"
                w={{ lg: '90px', sm: '70px', base: '44px' }}
                h={{ lg: '90px', sm: '70px', base: '44px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  as="p"
                  textShadow="2px 2px 0px #000000"
                  color="#fff"
                  
                >
                  41
                </Text>
              </Box>
            </Flex> */}
            <Box
              borderRadius="md"
              boxShadow="lg"
              mb={{ lg: '20px', base: '10px' }}
              mt={{ lg: '90px', sm: '50px', base: '20px' }}
            >
              <Text
                fontSize={{ lg: '24px', sm: '20px', base: '16px' }}
                fontWeight="500"
                color="#111111"
                mb={{ lg: '20px', base: '10px' }}
              >
                ETH Address (Recommended)
              </Text>
              <Flex
                border="2px solid #000"
                borderRadius={{ sm: '20px', base: '12px' }}
                alignItems="center"
                p={{ sm: '12px 17px', base: '8px 10px 8px 0' }}
                // flexDirection={{ sm: 'row', base: 'column' }}
              >
                <Input
                  placeholder="Presale address - TBA"
                  bg="transparent"
                  border="0"
                  boxShadow="none"
                  _focus={{ border: '0' }}
                  _focusVisible={{ boxShadow: 'none' }}
                  _placeholder={{ color: '#f3b2b2' }}
                  fontSize={{ sm: '18px', base: '16px' }}
                  fontWeight="500"
                  color="#fff"
                  resize="none"
                  m="13px 0 20px"
                  className="font-nutino"
                />
                <Button
                  bg="#F5B61B"
                  color="white"
                  border="2px solid #000000"
                  textShadow="0px 4px 0px #000000"
                  borderRadius="18px"
                  fontSize={{ lg: '28px', sm: '20px', base: '18px' }}
                  h="48px"
                  boxShadow="0px 4px 0px #000000"
                  _hover={{
                    bg: '#FFC945',
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s ease-in-out"
                >
                  COPY
                </Button>
              </Flex>
            </Box>
            <Box borderRadius="md" boxShadow="lg" mb="20px" mt="30px">
              <Text
                fontSize={{ lg: '24px', sm: '20px', base: '16px' }}
                fontWeight="500"
                color="#111111"
                mb={{ lg: '20px', base: '10px' }}
              >
                SOL Address
              </Text>
              <Flex
                border="2px solid #000"
                borderRadius={{ sm: '20px', base: '12px' }}
                alignItems="center"
                p={{ sm: '12px 17px', base: '8px 10px 8px 0' }}
                // flexDirection={{ sm: 'row', base: 'column' }}
              >
                <Input
                  placeholder="Presale address - TBA"
                  bg="transparent"
                  border="0"
                  boxShadow="none"
                  _focus={{ border: '0' }}
                  _focusVisible={{ boxShadow: 'none' }}
                  _placeholder={{ color: '#f3b2b2' }}
                  fontSize={{ sm: '18px', base: '16px' }}
                  fontWeight="500"
                  color="#fff"
                  resize="none"
                  m="13px 0 20px"
                  className="font-nutino"
                />
                <Button
                  bg="#F5B61B"
                  color="white"
                  border="2px solid #000000"
                  textShadow="0px 4px 0px #000000"
                  borderRadius="18px"
                  fontSize={{ lg: '28px', sm: '20px', base: '18px' }}
                  h="48px"
                  boxShadow="0px 4px 0px #000000"
                  _hover={{
                    bg: '#FFC945',
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s ease-in-out"
                >
                  COPY
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Text
        as="p"
        textAlign="center"
        fontSize={{ base: '22px', md: '28px', lg: '32px' }}
        color="#fff"
        fontWeight="500"
        maxW="1080px"
        mx="auto"
        mt="80px"
        lineHeight={{ base: '1.2', md: '1.3', lg: '1.4' }}
        px="20px"
      >
        Presale payments are accepted to both ETH and SOL addresses. $ANGRY
        token will be launching on Base sent to your ETH wallet.
      </Text>
    </Box>
  );
};

export default GetAngry;
