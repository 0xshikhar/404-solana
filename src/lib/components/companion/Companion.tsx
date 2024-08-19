import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const ScrollingBanner = () => {
  const texts = [
    '$ANGRY WHERE NFTs & MEMECOINS COLLIDE!',
    // '$ANGRY MAKES YOU STRONGER',
    // '$ANGRY MAKES YOU CHANGE THE WORLD',
    // '$ANGRY MAKES YOU BE',
  ];

  const scrollRef = useRef(null);
  const [, setContentWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setContentWidth((scrollRef.current as HTMLElement).offsetWidth);
    }
  }, []);
  const repeatedTexts = [
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
    ...texts,
  ];

  return (
    <Box
      position="absolute"
      width="100%"
      left="0"
      top={{ base: '0px', sm: '0px', md: '0px' }}
      bg="#F5B61B"
      py={{ base: 2, sm: 3, md: 4 }}
      px={{ base: 2, sm: 3, md: 4 }}
      overflow="hidden"
      whiteSpace="nowrap"
      transform={{ base: 'rotate(-2deg)', md: 'rotate(-2deg)' }}
      transformOrigin="bottom left"
      borderBottom={{ base: '4px solid black', md: '8px solid black' }}
      zIndex="10"
    >
      <Box
        display="flex"
        width="fit-content"
        animation={`scroll ${texts.length * 60}s linear infinite`}
        sx={{
          '@keyframes scroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: `translateX(-50%)` },
          },
        }}
      >
        {repeatedTexts.map((text, index) => (
          <Text
            // eslint-disable-next-line react/no-array-index-key
            key={`${text}-${index}`}
            ref={index === 0 ? scrollRef : null}
            flex="0 0 auto"
            fontSize={{ xl: '3xl', lg: '3xl', md: '2xl', sm: 'xl', base: 'lg' }}
            fontWeight="bold"
            color="black"
            mx={4}
            letterSpacing="1.7px"
          >
            {text}
          </Text>
        ))}
      </Box>
    </Box>
  );
};
const Companion = () => {
  return (
    <Box
      id="about"
      position="relative"
      width="100%"
      className="bg-companion"
      bgRepeat="no-repeat"
      bgSize="cover"
      display={{ md: 'flex' }}
      justifyContent="center"
      alignItems="end"
      pt={{ xl: '680px', lg: '440px', md: '310px' }}
      h="100%"
      pb="30px"
      backgroundPosition="center"
      px={{ md: '20px' }}
    >
      <Box w="100%" display={{ md: 'none', base: 'block' }}>
        <Image
          src="/images/bg-money.png"
          alt="bg-money"
          width={768}
          height={768}
        />
      </Box>
      <ScrollingBanner />
      <Box
        pl={{ md: '0', base: '10px' }}
        pr={{ md: '0', base: '20px' }}
        w="100%"
        maxW="1440px"
        mx="auto"
      >
        <Flex
          bg="#FFC945"
          p={{ xl: '90px', sm: '30px', base: '16px' }}
          pb="28px"
          borderRadius="24px"
          boxShadow="10px 10px 0px #000000"
          maxWidth="1440px"
          w="100%"
          h="fit-content"
          justifyContent="space-between"
          border="3px solid #000000"
          alignItems={{ md: 'start', base: 'center' }}
          gap={{ sm: '40px', base: '10px' }}
          flexDirection={{ md: 'row', base: 'column' }}
        >
          <Box
            minW={{ lg: '441px', sm: '280px' }}
            minH={{ lg: '441px', sm: '280px' }}
            mb={4}
          >
            <Image
              src="/images/money-cat.png"
              alt="About Image"
              width={441}
              height={441}
            />
          </Box>
          <Box maxW="620px">
            <Text
              as="p"
              fontSize={{ xl: '34px', lg: '28px', sm: '22px', base: '18px' }}
              color="#111111"
              textAlign={{ md: 'start', base: 'center' }}
            >
              The first memecoin with its own PFP companion!
            </Text>
            <Text
              as="p"
              fontSize={{ xl: '34px', lg: '28px', sm: '22px', base: '18px' }}
              color="#111111"
              textAlign={{ md: 'start', base: 'center' }}
            >
              Built on the brand new ERC404Meme standard developed by the $ANGRY
              team.
            </Text>
            <Text
              as="p"
              fontSize={{ xl: '34px', lg: '28px', sm: '22px', base: '18px' }}
              color="#111111"
              textAlign={{ md: 'start', base: 'center' }}
            >
              Hold 100k token supply and your furry companion will mint
              automatically to your wallet.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Companion;
