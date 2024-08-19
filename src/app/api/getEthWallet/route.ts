/* eslint-disable no-console */
import { NextResponse } from 'next/server';

import { query } from '../../../lib/db';

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
  i18n: false,
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const solAddress = searchParams.get('solAddress');
    if (!solAddress) {
      return NextResponse.json(
        { message: 'SOL address is required' },
        { status: 400 }
      );
    }
    console.log('solAddress', solAddress);
    const result = await query(
      'SELECT eth_address FROM wallet_pairs WHERE sol_address = $1',
      [solAddress]
    );
    if (result.length > 0) {
      return NextResponse.json({ ethWallet: result[0].eth_address });
    }
    return NextResponse.json(
      { message: 'No ETH wallet found for this SOL address' },
      { status: 300 }
    );
    console.log("working");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Internal server error', error: (error as Error).message },
      { status: 500 }
    );
  }
}
