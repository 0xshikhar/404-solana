'use client';

import { Flex, Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { AccordionSection } from '~/lib/components/AccordionSection'; // Adjust import path as needed
import useLocale from '~/lib/components/hooks/useLocale';
import LanguageSwitcher from '~/lib/components/LanguageSwitcher';
import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';

const SampleHome = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    router.push(`/${locale}/404`);
  };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
        gap={4}
        mb={8}
        w="full"
      >
        <LanguageSwitcher />
        <SomeText />
        <SomeImage />
        <CTASection />
        <Button onClick={handleClick}>404</Button>

        <AccordionSection />
      </Flex>

      <Box id="benefits" minHeight="100vh" p={4}>
        <h2>Benefits Section</h2>
      </Box>

      <Box id="faq" minHeight="100vh" p={4}>
        <h2>FAQ Section</h2>
      </Box>

      <Box id="roadmap" minHeight="100vh" p={4}>
        <h2>Roadmap Section</h2>
      </Box>

      <Box id="brewconomics" minHeight="100vh" p={4}>
        <h2>Brewconomics Section</h2>
      </Box>
    </>
  );
};

export default SampleHome;
