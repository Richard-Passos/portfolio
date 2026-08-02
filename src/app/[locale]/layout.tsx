import { StoreProvider } from '@/contexts/Store';
import { cn } from '@/utils/cn';
import localFont from 'next/font/local';

import {
  getIntlayer,
  IntlayerClientProvider,
  LocalPromiseParams,
  NextLayoutIntlayer
} from 'next-intlayer';
import { getHTMLTextDir, getMultilingualUrls } from 'intlayer';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Metadata } from 'next';
import { BASE_URL } from '@/common/BASE_URL';

export { generateStaticParams } from 'next-intlayer';

const displayFont = localFont({
  src: '../../../public/fonts/Archivo-Variable.ttf',
  display: 'swap'
});

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      dir={getHTMLTextDir(locale)}
      className={cn('scrollbar-gutter-stable overflow-x-clip', displayFont.className)}
    >
      <body className='relative flex min-h-(--h) flex-col items-center overflow-x-clip bg-body [--h:min(100dvh,var(--max-height-bounds))] [--w:min(100dvw,var(--max-width-bounds))]'>
        <SmoothScroll>
          <StoreProvider>
            <IntlayerClientProvider locale={locale}>{children}</IntlayerClientProvider>
          </StoreProvider>
        </SmoothScroll>
      </body>
    </html>
  );
};

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  const metadata = getIntlayer('root-metadata', locale);

  const multilingualUrls = getMultilingualUrls('/');
  const localizedUrl = multilingualUrls[locale as keyof typeof multilingualUrls];

  return {
    ...metadata,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: localizedUrl,
      languages: { ...multilingualUrls, 'x-default': '/' }
    },
    openGraph: {
      ...metadata.openGraph,
      url: localizedUrl
    }
  };
};

export default LocaleLayout;
