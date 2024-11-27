import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import StoreProvider from '../lib/store/store-provider';
import { Theme } from '@/theme';
import { NotistackProvider } from '@/components/notistack-provider';

export const metadata: Metadata = {
  title: 'Dashboard',
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
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </head>
      <body className={roboto.variable}>
        <StoreProvider>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <Theme>
              <NotistackProvider>{children}</NotistackProvider>
            </Theme>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
