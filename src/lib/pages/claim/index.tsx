/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */

'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { Flex, Box, Text, Button, Input } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

const WalletMultiButton = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

const ClaimPage = () => {
  const [ethWallet, setEthWallet] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { publicKey, signMessage, connected } = useWallet();
  const params = useParams();
  const locale = params.locale as string;

  // const {
  //   data,
  //   error: fetchError,
  //   mutate,
  // } = useSWR(
  //   connected
  //     ? `/${locale}/api/getEthWallet?solAddress=${publicKey?.toBase58()}`
  //     : null,
  //   fetcher
  // );
  //  `/[locale]/api/getEthWallet?solAddress=${publicKey?.toBase58()}`
  const {
    data,
    error: fetchError,
    mutate,
  } = useSWR(
    connected
      ? `${process.env.NEXT_PUBLIC_URL_LOCAL}/api/getEthWallet?solAddress=${publicKey?.toBase58()}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (data && data.ethWallet) {
      setEthWallet(data.ethWallet);
    }
  }, [data]);


  const handleSave = async () => {
    if (!connected) {
      setError('Please connect your wallet first.');
      return;
    }

    if (!signMessage) {
      setError('This wallet does not support message signing.');
      return;
    }

    const message = `Now you certify that you want to receive tokens in the following wallet. Eth wallet: ${ethWallet}, your Solana wallet: ${publicKey?.toBase58()}`;
    const encodedMessage = new TextEncoder().encode(message);

    try {
      const signature = await signMessage(encodedMessage);
      const response = await fetch('/api/saveWallets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sol: publicKey?.toBase58(),
          eth: ethWallet,
          sig: Buffer.from(signature).toString('base64'),
        }),
      });

      if (response.ok) {
        setSuccess('Successfully saved');
        mutate(); // Refresh the data
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save. Please try again.');
      }
    } catch (error) {
      setError(`Failed to sign the message: ${(error as Error).message}`);
    }
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      h="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
      m="0"
      p="0"
      boxSizing="border-box"
    >
      <Box
        bgGradient="linear(to-r, gray.700, gray.900)"
        borderRadius="lg"
        boxShadow="lg"
        p="6"
        w="90%"
        maxW="lg"
        textAlign="center"
        color="white"
      >
        <Text mb="4" fontSize="2xl" fontWeight="bold">
          Claim Your Tokens
        </Text>
        <Input
          type="text"
          placeholder="Your ETH Wallet to receive tokens"
          value={ethWallet}
          onChange={(e) => setEthWallet(e.target.value)}
          p="10px"
          m="10px 0"
          w="100%"
          borderRadius="4px"
          border="1px solid #ccc"
          bg="white"
          color="black"
        />
        <WalletMultiButton />
        {connected && publicKey && (
          <Text mt="4" fontSize="sm">
            Your connected wallet: {publicKey.toBase58().substring(0, 4)}...
            {publicKey.toBase58().slice(-4)}
          </Text>
        )}
        <Button
          onClick={handleSave}
          p="6"
          mt="4"
          borderRadius="md"
          bgGradient="linear(to-r, cyan.500, blue.500)"
          color="white"
          _hover={{
            bgGradient: 'linear(to-r, cyan.600, blue.600)',
          }}
        >
          Save
        </Button>
        {error && (
          <Text color="red.500" mt="2">
            {error}
          </Text>
        )}
        {success && (
          <Text color="green.500" mt="2">
            {success}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default ClaimPage;
