import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: 'NixHub',
  description: 'Bem-vindo ao NixHub!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${jetbrainsMono.variable} antialiased`}>
          <Header/>
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
          </body>
    </html>
  );
}
