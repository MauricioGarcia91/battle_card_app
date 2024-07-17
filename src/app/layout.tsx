import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/ui/Navbar';
import { NetworkStatus } from '@/ui/NetworkStatus';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Battle Card Game',
  description: 'Challenge for Cook Unity'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <NetworkStatus>{children}</NetworkStatus>
      </body>
    </html>
  );
}
