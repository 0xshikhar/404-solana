import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// import Slider from 'react-slick';
import cat from '../../../../public/images/cat.png';
import QuestionCat from '../../../../public/images/question-cat.png';
// import Airtable from '../../../../public/images/slideimg/Airtable.png';
// import Asana from '../../../../public/images/slideimg/asana.png';
// import Concenrt from '../../../../public/images/slideimg/concert.png';
// import Galileo from '../../../../public/images/slideimg/galileo.png';
// import Mosaic from '../../../../public/images/slideimg/mosaic.png';
// import Slack from '../../../../public/images/slideimg/slack.png';
// import Snap from '../../../../public/images/slideimg/snap.png';
// import Tella from '../../../../public/images/slideimg/tella.png';
// import WeTransfer from '../../../../public/images/slideimg/weTransfer.png';
// import Zapier from '../../../../public/images/slideimg/zapier.png';
// import Youtube from '../../../../public/images/you-tube.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const SliderData1 = [
//   { img: Airtable, id: 0 },
//   { img: Asana, id: 1 },
//   { img: Concenrt, id: 2 },
//   { img: Galileo, id: 3 },
//   { img: Mosaic, id: 4 },
//   { img: Slack, id: 5 },
//   { img: Snap, id: 6 },
//   { img: Tella, id: 7 },
//   { img: WeTransfer, id: 8 },
//   { img: Zapier, id: 9 },
// ];

const Question = () => {
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6.5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         slidesToShow: 5.5,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 4.5,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 3.5,
  //       },
  //     },
  //     {
  //       breakpoint: 425,
  //       settings: {
  //         slidesToShow: 2.5,
  //       },
  //     },
  //   ],
  // };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering on the server
  }

  return (
    <Box
      id="faqs"
      className="bg-shape"
      bgRepeat="no-repeat"
      bgSize="100%"
      pt={{ lg: '260px', sm: '150px', base: '80px' }}
    >
      <Box bg="#FFC945" position="relative">
        <Text
          as="h2"
          fontSize={{
            '2xl': '78px',
            lg: '60px',
            md: '50px',
            sm: '40px',
            base: '30px',
          }}
          textAlign="center"
          maxW="700px"
          mx="auto"
          lineHeight={{ '2xl': '88px', lg: '68px' }}
          mt="20px"
        >
          Frequently Asked Questions
        </Text>
        <Box
          position="absolute"
          bottom={{ lg: '0', md: '-40px', base: '-60px' }}
          right={{
            '2xl': '140px',
            xl: '100px',
            lg: '80px',
            sm: '60px',
            base: '20px',
          }}
          w={{
            '2xl': '212px',
            xl: '180px',
            md: '140px',
            base: '70px',
          }}
        >
          <Image src={QuestionCat} alt="QuestionCat" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ md: 'row', base: 'column' }}
        gap={{ '2xl': '50px', xl: '30px', base: '20px' }}
        bg="#FFC945"
        px={{ '2xl': '120px', xl: '80px', lg: '40px', base: '20px' }}
        pt="60px"
      >
        <Box
          w={{ md: '40%' }}
          display={{ md: 'block', base: 'flex' }}
          justifyContent="center"
        >
          <Image src={cat} alt="cat" />
        </Box>
        <Box w={{ md: '60%' }}>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            <AccordionItem
              boxShadow="10px 10px 0px #000000"
              border="2px solid #000"
              bg="#FFF7CE"
              borderRadius="28px"
            >
              <h2>
                <AccordionButton
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding={{ lg: '20px 30px', base: '20px' }}
                  cursor="pointer"
                >
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '36px',
                      xl: '28px',
                      lg: '22px',
                      sm: '20px',
                      base: '18px',
                    }}
                    textAlign="left"
                  >
                    What is ERC404 ?
                  </Text>
                  <FaChevronDown color="#000" fontSize="28px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                borderTop="1px solid #111111"
                p={{ xl: '30px 34px', base: '20px' }}
                display="flex"
                flexDirection={{ xl: 'row', base: 'column' }}
                alignItems="start"
                gap="40px"
              >
                {/* <Box w={{ xl: '65%' }}>
                  <Image src={Youtube} alt="Youtube" />
                </Box> */}
                <Box w={{ xl: '65%' }} borderRadius="16px" overflow="hidden">
                  <Box
                    as="iframe"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/zqnmjRHjwY8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer;  picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Box w={{ xl: '45%' }}>
                  <Text
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    className="font-nutino"
                  >
                    ERC404 is an experimental token standard combining features
                    from ERC-20 (fungible tokens) and ERC-721 (non-fungible).
                    <br />
                    It allows tokens to be both fungible and non-fungible
                    simultaneously.
                  </Text>
                  <Text
                    className="font-nutino"
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    mt="20px"
                  >
                    Essentially, the ERC-404 token standard allows NFTs to be
                    fractionalized within the boundaries of the Ethereum
                    protocol.
                    <br />
                    This allows users to trade fungible fractional portions of
                    the NFT.
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              boxShadow="10px 10px 0px #000000"
              border="2px solid #000"
              bg="#FFF7CE"
              borderRadius="28px"
            >
              <h2>
                <AccordionButton
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding={{ lg: '20px 30px', base: '20px' }}
                  cursor="pointer"
                >
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '36px',
                      xl: '28px',
                      lg: '22px',
                      sm: '20px',
                      base: '18px',
                    }}
                    textAlign="left"
                  >
                    Why is ERC404Meme different ?
                  </Text>
                  <FaChevronDown color="#000" fontSize="28px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                borderTop="1px solid #111111"
                p={{ xl: '30px 34px', base: '20px' }}
                display="flex"
                flexDirection={{ xl: 'row', base: 'column' }}
                alignItems="start"
                gap="40px"
              >
                <Box>
                  <Text
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    className="font-nutino"
                  >
                    ERC404Meme standard is specifically designed to enhance
                    liquidity and fractionalization while implementing a secure
                    process and automation tools for reliable token generation
                    and NFT reveals.
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    mt="20px"
                    className="font-nutino"
                  >
                    • ERC404: 1 $token = 1 NFT <br /> • ERC404Meme: 100k $tokens
                    = 1 NFT
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              boxShadow="10px 10px 0px #000000"
              border="2px solid #000"
              bg="#FFF7CE"
              borderRadius="28px"
            >
              <h2>
                <AccordionButton
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding={{ lg: '20px 30px', base: '20px' }}
                  cursor="pointer"
                >
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '36px',
                      xl: '28px',
                      lg: '22px',
                      sm: '20px',
                      base: '18px',
                    }}
                    textAlign="left"
                  >
                    How and where to buy $ANGRY ?
                  </Text>
                  <FaChevronDown color="#000" fontSize="28px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                borderTop="1px solid #111111"
                p={{ xl: '30px 34px', base: '20px' }}
                display="flex"
                flexDirection={{ xl: 'row', base: 'column' }}
                alignItems="start"
                gap="40px"
              >
                <Box>
                  <Text
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    className="font-nutino"
                  >
                    Users can buy $ANGRY tokens via Uniswap or buy an Angry Pet
                    NFT from Opensea. <br /> The purchase of 100k $ANGRY results
                    in the creation of a new NFT in your wallet. Buying an Angry
                    Pet on Opensea means you receive the NFT and the 100k $ANGRY
                    tokens associated to it&apos;s creation.
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              boxShadow="10px 10px 0px #000000"
              border="2px solid #000"
              bg="#FFF7CE"
              borderRadius="28px"
            >
              <h2>
                <AccordionButton
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding={{ lg: '20px 30px', base: '20px' }}
                  cursor="pointer"
                >
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '36px',
                      xl: '28px',
                      lg: '22px',
                      sm: '20px',
                      base: '18px',
                    }}
                    textAlign="left"
                  >
                    What happens when I sell my tokens ?
                  </Text>
                  <FaChevronDown color="#000" fontSize="28px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                borderTop="1px solid #111111"
                p={{ xl: '30px 34px', base: '20px' }}
                display="flex"
                flexDirection={{ xl: 'row', base: 'column' }}
                alignItems="start"
                gap="40px"
              >
                <Box>
                  <Text as="p" fontSize={{ lg: '20px', base: '16px' }}>
                    <List
                      spacing={4}
                      textAlign="left"
                      maxW="1020px"
                      mx="auto"
                      mt="20px"
                    >
                      <ListItem>
                        <Text
                          className="font-nutino"
                          as="span"
                          fontSize={{ base: '16px', md: '20px', lg: '20px' }} // Responsive font size
                          color="#111111"
                          fontWeight="500"
                          lineHeight={{ base: '1.2', md: '1.3', lg: '1.4' }} // Responsive line height
                        >
                          • Selling in fractions
                          <br />
                          When you sell a portion of your token supply your
                          current NFT will be stored in a secured smart
                          contract. When you start to hold 100k $ANGRY again
                          your current NFT will return to your wallet.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          className="font-nutino"
                          as="span"
                          fontSize={{ base: '16px', md: '20px', lg: '20px' }} // Responsive font size
                          color="#111111"
                          fontWeight="500"
                          lineHeight={{ base: '1.2', md: '1.3', lg: '1.4' }}
                        >
                          • Selling full supply
                          <br />
                          When you sell 100% of your supply of $ANGRY any NFTs
                          you currently hold will be burnt. These ID numbers
                          will no longer exist in the NFT collection. Buying a
                          new batch of 100k $ANGRY will result in a new Angry
                          Pet being minted.
                        </Text>
                      </ListItem>
                    </List>
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              boxShadow="10px 10px 0px #000000"
              border="2px solid #000"
              bg="#FFF7CE"
              borderRadius="28px"
            >
              <h2>
                <AccordionButton
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding={{ lg: '20px 30px', base: '20px' }}
                  cursor="pointer"
                >
                  <Text
                    as="h2"
                    fontSize={{
                      '2xl': '36px',
                      xl: '28px',
                      lg: '22px',
                      sm: '20px',
                      base: '18px',
                    }}
                    textAlign="left"
                  >
                    Why is $ANGRY on the Base blockchain?
                  </Text>
                  <FaChevronDown color="#000" fontSize="28px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                borderTop="1px solid #111111"
                p={{ xl: '30px 34px', base: '20px' }}
                display="flex"
                flexDirection={{ xl: 'row', base: 'column' }}
                alignItems="start"
                gap="40px"
              >
                <Box>
                  <Text
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    className="font-nutino"
                  >
                    The Base Chain provides a well-secured and robust ecosystem
                    to support $ANGRY growth and success. Base Chain is Ethereum
                    Layer-2 blockchain network developed by Coinbase.
                    <br />
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ lg: '20px', base: '16px' }}
                    mt="20px"
                    className="font-nutino"
                  >
                    It is designed to improve scalability, performance, and
                    interoperability while reducing transaction costs and
                    settlement time on the Ethereum network.
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      {/* <Box
        bg="#FFC945"
        pt="150px"
        pb={{ '2xl': '200px', lg: '140px', base: '80px' }}
      >
        <Text
          as="p"
          
          fontSize={{
            '2xl': '79px',
            lg: '60px',
            md: '50px',
            base: '40px',
          }}
          textAlign="center"
          mb="60px"
          px="20px"
          lineHeight="28px"
        >
          PARTNERS
        </Text>
        <Box>
          <Slider {...settings}>
            {SliderData1.map((value) => (
              <Box key={value.id}>
                <Box
                  boxShadow={{
                    sm: '10px 10px 0px #000000',
                    base: '5px 5px 0px #000000',
                  }}
                  border="1px solid #000"
                  bg="#FFF7CE"
                  h={{ md: '100px', sm: '80px', base: '60px' }}
                  borderRadius={{ sm: '28px', base: '18px' }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  px="20px"
                >
                  <Image src={value.img} alt="Airtable" />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box> */}
      <Box
        bg="#FFC945"
        pt="20px"
        pb={{ '2xl': '200px', lg: '140px', base: '80px' }}
      />
    </Box>
  );
};

export default Question;
