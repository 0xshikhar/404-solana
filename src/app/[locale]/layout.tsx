import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Providers from '~/app/[locale]/providers';
import { IMAGE_OG, LINK_WEBSITE } from '~/lib/constants';
import Layout from '~/lib/layout';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

const APP_NAME = '$ANGRY PETS';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Angry Pets' },
  description: 'Angry Pets',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: LINK_WEBSITE,
    title: '$ANGRY PETS',
    description: 'The Angriest & Grumpiest Pets in Crypto.',
    images: {
      url: IMAGE_OG,
      alt: 'AngryPets Banner',
    },
  },
  twitter: {
    creator: 'AngryPetsMeme',
    card: 'summary_large_image',
    title: APP_NAME,
    description: 'The Angriest & Grumpiest Pets in Crypto.',
    images: IMAGE_OG,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
