import TransitionProvider from '@/context/transition-provider';

import '@/styles/globals.css';

import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import i18nConfig from '@/i18nConfig';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import TranslationsProvider from '@/components/TranslationsProvider';

import initTranslations from '../i18n';

const GoToTop = dynamic(() => import('@/components/goto-top'));
const Navbar = dynamic(() => import('@/components/navbar'));

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = (await params).locale;
  const { t, options } = await initTranslations(locale, ['home']);

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head className="revert">
          <title>PIE makes Pi great!</title>
        </head>
        <body
          className={cn(
            'bg-background min-h-screen font-sans antialiased',
            fontSans.variable
          )}
        >
          <TranslationsProvider
            locale={locale}
            namespaces={options.ns as string[]}
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">
                <TransitionProvider>{children}</TransitionProvider>
              </div>
            </div>
            <GoToTop />
            <Footer />
          </TranslationsProvider>
        </body>
      </html>
    </>
  );
}
