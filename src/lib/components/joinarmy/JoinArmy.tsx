import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import cats from '../../../../public/images/cats.png';
import money from '../../../../public/images/money-bag.png';
import { LINK_TELEGRAM, LINK_TWITTER } from '../../constants';

const TelegramButton = () => {
  return (
    <Box
      as="a"
      href={LINK_TELEGRAM}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      alignItems="center"
      boxShadow="5px 5px 0px #000000"
      border="2px solid #000"
      borderRadius="8px"
      bg="#FFF7CE"
      p="8px"
      _hover={{ bg: '#FFC945', transform: 'scale(1.1)' }}
      transition="transform 0.2s ease-in-out"
    >
      <FaTelegramPlane color="#000" fontSize="32px" />
      <Text ml="10px" mt="5px" fontSize="20px" color="#000">
        Telegram
      </Text>
    </Box>
  );
};

const TwitterButton = () => {
  return (
    <Box
      as="a"
      href={LINK_TWITTER}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      alignItems="center"
      boxShadow="5px 5px 0px #000000"
      border="2px solid #000"
      borderRadius="8px"
      bg="#FFF7CE"
      p="8px"
      _hover={{ bg: '#FFC945', transform: 'scale(1.1)' }}
      transition="transform 0.2s ease-in-out"
    >
      <FaXTwitter color="#000" fontSize="32px" />
      <Text ml="16px" mt="5px" fontSize="20px" color="#000">
        Twitter
      </Text>
    </Box>
  );
};

const JoinArmy = () => {
  return (
    <Box
      bg="#F8CF96"
      h={{ lg: '251px' }}
      display="flex"
      flexDirection={{ lg: 'row', base: 'column' }}
      alignItems={{ lg: 'center', base: 'start' }}
      px={{ xl: '72px', md: '40px', base: '14px' }}
      position="relative"
      pt={{ lg: 0, base: '30px' }}
      overflow="visible"
    >
      <Box
        order={{ lg: 1, base: 2 }}
        h="100%"
        display="flex"
        justifyContent="space-between"
        w={{ lg: 'initial', base: '100%' }}
        alignItems={{ lg: 'start', base: 'end' }}
      >
        <Box
          transform="rotate(-3deg)"
          mt={{ lg: '10px' }}
          w={{ xl: '593px', base: '400px' }}
          h="100%"
        >
          <Box
            position="absolute"
            bottom={{ lg: '-9px', md: '-18px', sm: '-18px', base: '-12px' }}
            left={{ xl: 0, lg: '-30px' }}
            // mb={{ lg: '0', md: '-18px', sm: '-12px', base: '-12px' }}
            ml={{ sm: '0', base: '-80px' }}
          >
            <Image src={cats} alt="cats" />
          </Box>
        </Box>
        <Box mt="-30px" display={{ lg: 'none', base: 'block' }} w="280px">
          <Image src={money} alt="money" width={280} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ lg: 'space-between', base: 'center' }}
        flexDirection={{ lg: 'row' }}
        w="100%"
        mb={{ lg: 0, base: '70px' }}
        order={{ lg: 2, base: 1 }}
      >
        <Box ml={{ lg: '20px' }}>
          <Text
            fontSize={{ xl: '46px', md: '40px', sm: '36px', base: '25px' }}
            color="black"
            textAlign={{ lg: 'start', base: 'center' }}
          >
            Join $ANGRY Army NOW!
          </Text>
          <Box
            display="flex"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            <TwitterButton />
            <TelegramButton />
          </Box>
        </Box>
        <Box mt="-30px" display={{ lg: 'block', base: 'none' }}>
          <Image src={money} alt="money" width={280} />
        </Box>
      </Box>
    </Box>
  );
};

export default JoinArmy;
