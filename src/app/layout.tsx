import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import StoreProvider from '../lib/store/store-provider';
import { Theme } from '@/theme';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Board',
  description: 'Board Application'
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <body className={roboto.variable}>
        <StoreProvider>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <Theme>{children}</Theme>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
