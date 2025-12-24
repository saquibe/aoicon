import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AOICON 2026 Kolkata - 77th Annual Conference of The Association of Otolaryngologists of India',
  description: '77th Annual Conference of The Association of Otolaryngologists of India (AOICON 2026) - 8th to 11th January 2026 at Biswa Bangla Convention Centre, Kolkata. Theme: Embark on a Journey of Innovation, Collaboration, and Excellence',
  keywords: ['AOICON 2026', 'Otolaryngologists of India', 'ENT Conference', 'Kolkata Conference', 'Medical Conference 2026'],
  openGraph: {
    title: 'AOICON 2026 Kolkata',
    description: '77th Annual Conference - 8th to 11th January 2026',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOICON 2026 Kolkata',
    description: '77th Annual Conference - 8th to 11th January 2026',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
