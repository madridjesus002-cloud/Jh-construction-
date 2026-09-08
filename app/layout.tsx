import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://j-hernandez-construction.madridjesus002.chatgpt.site'),
  title: 'J Hernandez Construction LLC | West Hartford, CT',
  description:
    'Licensed and insured construction, concrete, stonework, patios, steps, sidewalks, tile, snow, and landscaping services in West Hartford, Connecticut.',
  openGraph: {
    title: 'J Hernandez Construction LLC',
    description: 'Built better in West Hartford. Licensed and insured construction and property services.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'J Hernandez Construction LLC — Built Better in West Hartford' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J Hernandez Construction LLC',
    description: 'Built better in West Hartford. Licensed and insured construction and property services.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
