// 'use client';

// import { CacheProvider } from '@chakra-ui/next-js';

// import { Chakra as ChakraProvider } from '~/lib/components/Chakra';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import {
//     WalletModalProvider,
//     WalletDisconnectButton,
//     WalletMultiButton
// } from '@solana/wallet-adapter-react-ui';
// const Providers = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <CacheProvider>
//       <ChakraProvider>{children}</ChakraProvider>
//     </CacheProvider>
//   );
// };

// export default Providers;

'use client';

// import no-named-as-default
import { CacheProvider } from '@chakra-ui/next-js';
import type { Adapter } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

require('@solana/wallet-adapter-react-ui/styles.css');

const Providers = ({ children }: { children: React.ReactNode }) => {
  const endpoint = 'https://api.mainnet-beta.solana.com';
  const wallets: Adapter[] = [];
  return (
    <CacheProvider>
      <ChakraProvider>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
