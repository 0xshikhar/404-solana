import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

import Close from '../../../../public/images/memecoin/close.png';
import Cointable2 from '../../../../public/images/memecoin/coin-table2.png';
import MemecoinCat from '../../../../public/images/memecoin/memecoin-cat.png';
import Check from '../../../../public/images/roadmap/check.png';

const Memecoins = () => {
  return (
    <Box
      clipPath={{
        '2xl': 'polygon(0 0, 100% 6%, 100% 94%, 0% 100%)',
        xl: 'polygon(0 0, 100% 8%, 100% 92%, 0% 100%)',
        lg: 'polygon(0 0, 100% 7%, 100% 92.3%, 0% 100%)',
        md: 'polygon(0 0, 100% 3%, 100% 96.3%, 0% 100%)',
        sm: 'polygon(0 0, 100% 3%, 100% 97%, 0% 100%)',
        base: 'polygon(0 0, 100% 3.6%, 100% 97%, 0% 100%)',
      }}
      mt={{
        '2xl': '-82px',
        xl: '-104px',
        lg: '-92px',
        md: '-72px',
        base: '-50px',
      }}
      bg="#F5B61B"
      px="20px"
      pt={{ xl: '120px', base: '110px' }}
      pb={{ '2xl': '190px', xl: '110px', sm: '160px', base: '100px' }}
      boxShadow="0px 16px 0px #000000"
    >
      <Box maxW="1400px" mx="auto">
        <Box
          display="flex"
          alignItems="center"
          gap={{ sm: '80px', base: '40px' }}
          flexDirection={{ lg: 'row', base: 'column' }}
        >
          <Box w={{ xl: '50%', lg: '45%' }}>
            <Text
              as="p"
              fontSize={{ md: '28px', sm: '22px', base: '18px' }}
              className="font-nutino"
              fontWeight="600"
            >
              Welcome to the future of
            </Text>
            <Text
              as="h2"
              fontSize={{
                '2xl': '100px',
                xl: '80px',
                md: '60px',
                sm: '50px',
                base: '40px',
              }}
              lineHeight={{
                '2xl': '100px',
                xl: '80px',
                sm: '60px',
                base: '50px',
              }}
              mt="30px"
              mb="20px"
            >
              Memecoins - ERC404Meme
            </Text>
            <Text
              as="p"
              fontSize={{ md: '20px', base: '16px' }}
              className="font-nutino"
              fontWeight="500"
            >
              We created a groundbreaking token standard that enables Memecoins
              and NFTs to be traded within one ecosystem.
            </Text>
            <Text
              as="p"
              fontSize={{ md: '20px', base: '16px' }}
              className="font-nutino"
              fontWeight="500"
              mt="30px"
            >
              It blends the fun of Memecoins with the community spirit of NFTs
              while introducing super liquid fungible NFTs for the first time.
            </Text>
            <Box
              mt="40px"
              display="flex"
              alignItems="center"
              gap="14px"
              flexWrap="wrap"
            >
              <Button
                as="a"
                href="https://github.com/AngryPets/ERC404Meme"
                bg="#DD2424"
                boxShadow="0px 6px 0px #000000"
                border="2px solid #000000"
                borderRadius="18px"
                textShadow="2px 2px 0px #000000"
                h="60px"
                display="flex"
                gap="8px"
                _hover={{
                  bg: '#FF3737',
                  transform: 'scale(1.05)',
                }}
                transition="all 0.2s ease-in-out"
              >
                <FaGithub color="#fff" size={30} />
                <Text
                  as="span"
                  fontSize="18px"
                  display="block"
                  mt="4px"
                  fontWeight="500"
                >
                  Open Source on GitHub
                </Text>
              </Button>
              {/* <Button
                bg="transparent"
                fontSize="20px"
                color="#000"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Image src={Git} alt="Git" />
                <Text as="span" lineHeight="23px" mt="10px" display="block">
                  Explore Git library
                </Text>
              </Button> */}
            </Box>
          </Box>
          <Box w={{ xl: '50%', lg: '65%' }} position="relative">
            <Box>
              <Image src={Cointable2} alt="Cointable" />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ lg: 'row', base: 'column' }}
          gap="40px"
          mt={{ '2xl': '170px', sm: '100px', base: '50px' }}
        >
          <Box w={{ lg: '40%' }} position="relative">
            <Box w={{ lg: 'auto', md: '500px', sm: '390px' }} mx="auto">
              <Image src={MemecoinCat} alt="MemecoinCat" />
            </Box>
          </Box>
          <Box w={{ lg: '60%' }}>
            <Text
              as="h2"
              fontSize={{ md: '48px', sm: '30px', base: '28px' }}
              textAlign="center"
              mb="30px"
            >
              What ERC-404 can do
            </Text>
            <Box overflowX="auto" className="table-main">
              <Box minW="700px" pb="20px">
                <Box w="100%" display="flex">
                  <Box w="52%" />
                  <Box w="16%" pb="10px">
                    <Text
                      as="p"
                      color="#111111"
                      fontSize="20px"
                      textAlign="center"
                    >
                      ERC-404
                    </Text>
                  </Box>
                  <Box w="16%" pb="10px">
                    <Text
                      as="p"
                      color="#111111"
                      fontSize="20px"
                      textAlign="center"
                    >
                      ERC-721
                    </Text>
                  </Box>
                  <Box w="16%" pb="10px">
                    <Text
                      as="p"
                      color="#111111"
                      fontSize="20px"
                      textAlign="center"
                    >
                      ERC-20
                    </Text>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box w="52%">
                    <Box borderBottom="1px solid #000" pb="10px" pt="20px">
                      <Text as="p" color="#111111" pr="20px" fontSize="20px">
                        Fractionlization
                      </Text>
                    </Box>
                    <Box borderBottom="1px solid #000" pb="10px" pt="20px">
                      <Text as="p" color="#111111" pr="20px" fontSize="20px">
                        NFT Protocol Interoperability
                      </Text>
                    </Box>
                    <Box borderBottom="1px solid #000" pb="10px" pt="20px">
                      <Text as="p" color="#111111" pr="20px" fontSize="20px">
                        Native liquidity
                      </Text>
                    </Box>
                    <Box borderBottom="1px solid #000" pb="10px" pt="20px">
                      <Text as="p" color="#111111" pr="20px" fontSize="20px">
                        ERC20 Protocol Interoperability
                      </Text>
                    </Box>
                    <Box borderBottom="1px solid #000" pb="10px" pt="20px">
                      <Text as="p" color="#111111" pr="20px" fontSize="20px">
                        Non-Fungible properties
                      </Text>
                    </Box>
                    <Box />
                  </Box>
                  <Box w="16%">
                    <Box
                      bg="#010101"
                      shadow="6px 8px 0px #000000"
                      border="4px solid #000000"
                      borderRadius="24px"
                      px="20px"
                      py="20px"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="30px"
                    >
                      <Image src={Check} alt="Check" />
                      <Image src={Check} alt="Check" />
                      <Image src={Check} alt="Check" />
                      <Image src={Check} alt="Check" />
                      <Image src={Check} alt="Check" />
                      <Button
                        as="a"
                        href="#presale"
                        bg="#DD2424"
                        boxShadow="0px 6px 0px #000000"
                        border="2px solid #000000"
                        borderRadius="14px"
                        textShadow="2px 2px 0px #000000"
                        fontSize="16px"
                        h="50px"
                        _hover={{
                          bg: '#FF3737',
                          transform: 'scale(1.05)',
                        }}
                        transition="all 0.2s ease-in-out"
                      >
                        Buy now
                      </Button>
                    </Box>
                  </Box>
                  <Box w="16%">
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Close} alt="Close" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Check} alt="Check" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Close} alt="Close" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Close} alt="Close" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Check} alt="Check" />
                    </Box>
                  </Box>
                  <Box w="16%">
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Check} alt="Check" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Close} alt="Close" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Check} alt="Check" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Check} alt="Check" />
                    </Box>
                    <Box
                      h="61px"
                      borderBottom="1px solid #000"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image src={Close} alt="Close" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Memecoins;
