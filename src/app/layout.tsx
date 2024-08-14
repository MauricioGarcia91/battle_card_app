import type { Metadata } from 'next';

import Stack from '@mui/material/Stack';

import { Navbar } from '@/ui/commons/Navbar';
import { NetworkStatus } from '@/ui/commons/NetworkStatus';

import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Battle Card Game',
  description: 'Author: Garcia Mauricio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Stack
          minHeight='inherit'
          gap={2}>
          <Navbar />
          <NetworkStatus>
            <Stack
              maxWidth='lg'
              margin='0 auto'
              flex={1}>
              {children}
            </Stack>
          </NetworkStatus>
        </Stack>
      </body>
    </html>
  );
}
