import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { Height, SmoothScroll } from '@/components/atoms';
import {
  CookiesConsent,
  Footer,
  Header,
  Providers,
  Toaster
} from '@/components/organisms';
import { baseUrl } from '@/constants';
import routing from '@/i18n/routing';
import '@/styles/globals.css';
import { defaultColorScheme } from '@/styles/theme';
import { isLocale } from '@/utils';
import { personalApi } from '@/utils/actions';

type LayoutOwnProps = PropsWithChildren<{}>;

// Has to be string to avoid next error with locale enums
type LayoutParams = { params: Promise<{ locale: string }> };

type LayoutProps = LayoutOwnProps & LayoutParams;

const Layout = async ({ params, children }: LayoutProps) => {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  return (
    <html
      className={`overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden`}
      lang={locale}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>

      <body
        className={`relative flex min-h-svh flex-col items-center overflow-x-clip`}
      >
        <Providers>
          <SmoothScroll>
            <Height.Set name='header'>
              <Header />
            </Height.Set>

            <Height.Get name={['header', 'document']}>
              <main
                className={`max-w-bounds 3xl:min-h-bounds max-3xl:grow relative flex w-full flex-col items-center`}
              >
                {children}
              </main>
            </Height.Get>

            <Height.Get name='document'>
              <Footer />
            </Height.Get>

            <CookiesConsent />

            <Toaster />

            <Analytics />
            <SpeedInsights />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
};

const generateMetadata = async ({
  params
}: LayoutParams): Promise<Metadata> => {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const res = await personalApi.get({ locale });

  if (!res.ok) return {};

  const personal = res.data;

  return {
    title: {
      default: personal.title,
      template: `%s — ${personal.name.first} ${personal.name.last}`
    },
    description: personal.description,
    keywords: personal.description,
    authors: personal.authors,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: personal.title,
      description: personal.description,
      url: baseUrl,
      siteName: `${personal.name.first} ${personal.name.last}`,
      locale: locale,
      type: 'website'
    }
  };
};

const generateStaticParams = () => {
  const locales = routing.locales as string[]; // Has to be string to avoid next error with locale enums

  return locales.map((locale) => ({ locale }));
};

export default Layout;
export { generateMetadata, generateStaticParams };
export type { LayoutProps, LayoutParams };
