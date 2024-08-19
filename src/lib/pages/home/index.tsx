/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { Box } from '@chakra-ui/react';
import LuciaSDK from 'luciasdk-t3';

import Angrynomics from '~/lib/components/angrynomics/Angrynomics';
import Companion from '~/lib/components/companion/Companion';
// import Features from '~/lib/components/features/Features';
import Footer from '~/lib/components/footer/Footer';
import '../../styles/globals.css';
import GetAngry from '~/lib/components/getangry/GetAngry';
import Hero from '~/lib/components/hero/Hero';
import JoinArmy from '~/lib/components/joinarmy/JoinArmy';
import Memecoins from '~/lib/components/memecoins/Memecoins';
import Question from '~/lib/components/questions/Question';
import Roadmap from '~/lib/components/roadmap/Roadmap';
// import '@fontsource/luckiest-guy';

const Home = () => {
  LuciaSDK.init({
    baseURL: 'https://staging.api.clickinsights.xyz/fk',
    api_key:
      '419bc368-893f31d0-c1b570a3-82894419-6fc226b8-0722866a-735dd7f0-5252b53f',
    clientId: '',
  });
  LuciaSDK.pageView('home');
  return (
    <Box>
      <Hero />
      <Companion />
      <GetAngry />
      <Memecoins />
      <Angrynomics />
      <Roadmap />
      <Box bg="#380000">
        {/* <Features /> */}
        <Question />
      </Box>
      <JoinArmy />
      <Footer />
    </Box>
  );
};

export default Home;
