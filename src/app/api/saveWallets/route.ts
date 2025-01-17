/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import { PublicKey } from '@solana/web3.js';
import { NextResponse } from 'next/server';
import nacl from 'tweetnacl';

import { run } from '../../../lib/db';

export async function POST(request: Request) {
  try {
    const { sol, eth, sig } = await request.json();

    // Verify the signature
    const message = `Now you certify that you want to receive tokens in the following wallet. Eth wallet: ${eth}, your Solana wallet: ${sol}`;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = Buffer.from(sig, 'base64');
    const publicKey = new PublicKey(sol);

    const isValid = nacl.sign.detached.verify(
      encodedMessage,
      signature,
      publicKey.toBuffer()
    );

    if (!isValid) {
      return NextResponse.json(
        { message: 'Did you sign the request using your presale wallet?' },
        { status: 400 }
      );
    }

    // Save to database
    await run(
      'INSERT INTO wallet_pairs (sol_address, eth_address) VALUES ($1, $2) ON CONFLICT (sol_address) DO UPDATE SET eth_address = EXCLUDED.eth_address',
      [sol, eth]
    );
    return NextResponse.json({ message: 'Successfully saved' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: (error as Error).message },
      { status: 500 }
    );
  }
}
