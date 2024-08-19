// import { Box, Text } from '@chakra-ui/react';
// import Image from 'next/image';

// import Nomic1 from '../../../../public/images/nomic1.png';
// import Nomic2 from '../../../../public/images/nomic2.png';

// const Angrynomics = () => {
//   return (
//     <Box
//       id="tokenomics"
//       clipPath={{
//         '2xl': 'polygon(0 8%, 100% 0, 100% 100%, 0% 100%)',
//         xl: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
//         md: 'polygon(0 12%, 100% 0, 100% 100%, 0% 100%)',
//         sm: 'polygon(0 6%, 100% 0, 100% 100%, 0% 100%)',
//         base: 'polygon(0 6%, 100% 0, 100% 100%, 0% 100%)',
//       }}
//       bg="#00D1FF"
//       pt="120px"
//       borderBottom="16px solid #000000"
//       pb={{ md: '100px', base: '60px' }}
//       marginBottom="20px"
//       marginTop={{
//         '2xl': '-80px',
//         xl: '-100px',
//         lg: '-94px',
//         md: '-78px',
//         base: '-50px',
//       }}
//     >
//       <Box>
//         <Text
//           as="h2"
//           color="#DD2424"
//           fontSize={{
//             xl: '100px',
//             lg: '70px',
//             md: '54px',
//             sm: '40px',
//             base: '32px',
//           }}
//           textAlign="center"
//           mb={{ xl: '40px', lg: '20px', base: '10px' }}
//         >
//           Angry
//           <Text as="span" color="#000">
//             nomics
//           </Text>
//         </Text>
//         <Text
//           color="#FFC945"
//           fontSize={{
//             xl: '100px',
//             lg: '70px',
//             md: '54px',
//             sm: '40px',
//             base: '32px',
//           }}
//           textAlign="center"
//           lineHeight={{ xl: '90px', lg: '60px', md: '44px', sm: '30px' }}
//         >
//           1,000,000,000{' '}
//           <Text as="span" color="#DD2424">
//             $ANGRY
//           </Text>
//         </Text>
//         <Text
//           color="#F5B61B"
//           fontSize={{ xl: '52px', lg: '40px', md: '30px', base: '20px' }}
//           textAlign="center"
//         >
//           100k{' '}
//           <Text as="span" color="#DD2424">
//             $ANGRY
//           </Text>{' '}
//           <Text as="span" color="#000">
//             =
//           </Text>{' '}
//           1{' '}
//           <Text as="span" color="#000">
//             NFT
//           </Text>
//         </Text>
//         <Text
//           color="#F5B61B"
//           fontSize={{ xl: '52px', lg: '40px', md: '30px', base: '20px' }}
//           textAlign="center"
//         >
//           10K{' '}
//           <Text as="span" color="#000">
//             NFT SUPPLY
//           </Text>
//         </Text>
//       </Box>
//       <Box
//         display="grid"
//         gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
//         gap={{ lg: '34px', base: '20px' }}
//         mt={{ md: '90px', base: '40px' }}
//         maxW="1400px"
//         mx="auto"
//         px="20px"
//       >
//         <Box
//           bg="#FFF7CE"
//           border="4px solid #000"
//           boxShadow={{
//             lg: '20px 20px 0px #000000',
//             base: '10px 10px 0px #000000',
//           }}
//           borderRadius="28px"
//           marginRight={{ lg: '0', base: '10px' }}
//         >
//           <Text
//             as="h2"
//             fontSize={{ lg: '28px', sm: '22px', base: '20px' }}
//             color="#000"
//             borderBottom="1px solid #646464"
//             p="20px 24px 8px 24px"
//           >
//             Allocation
//           </Text>
//           <Box
//             display="flex"
//             justifyContent="center"
//             mt={{ xl: '-50px', lg: '-30px' }}
//           >
//             <Image src={Nomic1} alt="Nomic1" />
//           </Box>
//         </Box>
//         <Box
//           bg="#FFF7CE"
//           border="4px solid #000"
//           boxShadow={{
//             lg: '20px 20px 0px #000000',
//             base: '10px 10px 0px #000000',
//           }}
//           borderRadius="28px"
//           marginRight={{ lg: '20px', base: '10px' }}
//         >
//           <Text
//             as="h2"
//             fontSize={{ lg: '28px', sm: '22px', base: '20px' }}
//             color="#000"
//             borderBottom="1px solid #646464"
//             p="20px 24px 8px 24px"
//           >
//             Presale Break down
//           </Text>
//           <Box display="flex" justifyContent="center">
//             <Image src={Nomic2} alt="Nomic2" />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Angrynomics;

import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import Nftbanner from '../../../../public/images/nftbanner.png';
import Nomic1 from '../../../../public/images/nomic1.png';
import Nomic2 from '../../../../public/images/nomic2.png';
// eslint-disable-next-line import/no-extraneous-dependencies
// import '@fontsource/roboto-condensed';

const Angrynomics = () => {
  return (
    <Box
      id="tokenomics"
      clipPath={{
        '2xl': 'polygon(0 8%, 100% 0, 100% 100%, 0% 100%)',
        xl: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
        md: 'polygon(0 12%, 100% 0, 100% 100%, 0% 100%)',
        sm: 'polygon(0 6%, 100% 0, 100% 100%, 0% 100%)',
        base: 'polygon(0 6%, 100% 0, 100% 100%, 0% 100%)',
      }}
      bg="#00D1FF"
      pt="120px"
      borderBottom="16px solid #000000"
      pb={{ md: '100px', base: '60px' }}
      marginBottom="20px"
      marginTop={{
        '2xl': '-80px',
        xl: '-100px',
        lg: '-94px',
        md: '-78px',
        base: '-50px',
      }}
      position="relative"
    >
      <Box>
        <Text
          as="h2"
          color="#DD2424"
          fontSize={{
            xl: '100px',
            lg: '70px',
            md: '54px',
            sm: '40px',
            base: '32px',
          }}
          textAlign="center"
          mb={{ xl: '40px', lg: '20px', sm: '30px', base: '20px' }}
        >
          Angry
          <Text as="span" color="#000">
            nomics
          </Text>
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box w="fit-content" position="relative">
            <Text
              color="#FFC945"
              w="fit-content"
              fontSize={{
                xl: '100px',
                lg: '70px',
                md: '54px',
                sm: '40px',
                base: '28px',
              }}
              textAlign="center"
              lineHeight={{ xl: '90px', lg: '60px', md: '44px', sm: '30px' }}
            >
              1,000,000,000{' '}
              <Text as="span" color="#DD2424">
                $ANGRY
              </Text>
            </Text>
            <Box
              position="absolute"
              top={{
                xl: '-112px',
                lg: '-90px',
                md: '-71px',
                sm: '-51px',
                base: '-31px',
              }}
              right={{
                xl: '-95px',
                lg: '-85px',
                md: '-69px',
                sm: '-28px',
                base: '-12px',
              }}
              width={{
                xl: '238px',
                lg: '190px',
                md: '150px',
                sm: '100px',
                base: '80px',
              }}
            >
              <Image src={Nftbanner} alt="nftbanner" width={238} />
              <Text
                as="p"
                fontSize={{
                  xl: '28px',
                  lg: '22px',
                  md: '18px',
                  sm: '13px',
                  base: '10px',
                }}
                position="absolute"
                top={{
                  xl: '40px',
                  lg: '34px',
                  md: '26px',
                  sm: '16px',
                  base: '13px',
                }}
                left={{
                  xl: '60px',
                  lg: '50px',
                  md: '38px',
                  sm: '22px',
                  base: '18px',
                }}
                transform="rotate(6deg)"
                color="#272525"
              >
                = 10K NFTS
              </Text>
            </Box>
          </Box>
        </Box>
        <Text
          color="#F5B61B"
          fontSize={{ xl: '52px', lg: '40px', md: '30px', base: '20px' }}
          textAlign="center"
        >
          100k{' '}
          <Text as="span" color="#DD2424">
            $ANGRY
          </Text>{' '}
          <Text as="span" color="#000">
            =
          </Text>{' '}
          1{' '}
          <Text as="span" color="#000">
            NFT
          </Text>
        </Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
        gap={{ lg: '34px', base: '20px' }}
        mt={{ md: '90px', base: '40px' }}
        maxW="1400px"
        mx="auto"
        px="20px"
      >
        <Box
          bg="#FFF7CE"
          border="4px solid #000"
          boxShadow={{
            lg: '20px 20px 0px #000000',
            base: '10px 10px 0px #000000',
          }}
          borderRadius="28px"
          marginRight={{ lg: '0', base: '10px' }}
        >
          <Text
            as="h2"
            fontSize={{ lg: '28px', sm: '22px', base: '20px' }}
            color="#000"
            borderBottom="1px solid #646464"
            p="20px 24px 8px 24px"
          >
            Allocation
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            mt={{ xl: '-50px', lg: '-30px' }}
          >
            <Image src={Nomic1} alt="Nomic1" />
          </Box>
        </Box>
        <Box
          bg="#FFF7CE"
          border="4px solid #000"
          boxShadow={{
            lg: '20px 20px 0px #000000',
            base: '10px 10px 0px #000000',
          }}
          borderRadius="28px"
          marginRight={{ lg: '20px', base: '10px' }}
        >
          <Text
            as="h2"
            fontSize={{ lg: '28px', sm: '22px', base: '20px' }}
            color="#000"
            borderBottom="1px solid #646464"
            p="20px 24px 8px 24px"
          >
            Presale Break down
          </Text>
          <Box display="flex" justifyContent="center">
            <Image src={Nomic2} alt="Nomic2" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Angrynomics;
