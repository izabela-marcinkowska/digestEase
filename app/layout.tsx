import type { Metadata } from 'next';
import { Montserrat, Roboto_Serif } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

const RobotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-robotoSerif',
  weight: '100',
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'DigestEase',
  description:
    'Transforming digestive health with AI-driven insights. Track, manage, thrive. Your journey to a happier gut starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${RobotoSerif.variable} bg-backg`}>
        <Navigation />
        {children}
        <Footer />
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
