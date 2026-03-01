import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getHTMLTextDir } from 'intlayer';
import { IntlayerClientProvider, type NextLayoutIntlayer } from 'next-intlayer';

import { Toaster } from '@/components/feedback';
import { CookiesConsent, Footer, Header } from '@/components/layout/regions';
import { SmoothScroll } from '@/components/motion';
import { defaultColorScheme } from '@/styles/theme';

export { generateStaticParams } from 'next-intlayer';

const LocaleLayout: NextLayoutIntlayer = async ({ params, children }) => {
  const { locale } = await params;

  return (
    <html
      className='overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden'
      lang={locale}
      dir={getHTMLTextDir(locale)}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>

      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip bg-white'>
        <IntlayerClientProvider locale={locale}>
          <SmoothScroll>
            <Header />

            <main className='max-w-bounds 3xl:min-h-bounds max-3xl:grow flex w-full flex-col items-center overflow-y-clip rounded-b-4xl'>
              {children}
            </main>

            <Footer />

            <CookiesConsent />
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </SmoothScroll>
        </IntlayerClientProvider>
      </body>
    </html>
  );
};

/* const generateMetadata = async ({
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
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: personal.title,
      description: personal.description,
      url: BASE_URL,
      siteName: `${personal.name.first} ${personal.name.last}`,
      locale: locale,
      type: 'website'
    }
  };
};*/

export default LocaleLayout;
