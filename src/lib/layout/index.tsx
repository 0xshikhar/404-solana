'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// import Footer from './Footer';
// import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      {/* <Header /> */}
      <Box margin="0">
        <Box as="main" marginY={0}>
          {children}
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default Layout;
