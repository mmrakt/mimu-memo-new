import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import 'highlight.js/styles/github-dark.css';
import { ABOUT_SITE, MY_NAME, SITE_NAME } from '@/config';
import Footer from './_components/Footer';
import Navigation from './_components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${MY_NAME}'s personal site`,
  description: `${ABOUT_SITE.join(' ')}`,
  openGraph: {
    title: `${SITE_NAME} | ${MY_NAME}'s personal site`,
    description: `${ABOUT_SITE.join(' ')}`,
    images: [
      {
        url: '/ogp/thumbnail.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen bg-slate-900 text-slate-100 flex flex-col`}
      >
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
