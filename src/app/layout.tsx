
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Khan Academy Clone',
  description: 'A clone of Khan Academy with learning dashboard and admin panel',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        {children}
      </body>
    </html>
  );
}
