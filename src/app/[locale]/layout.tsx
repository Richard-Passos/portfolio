import { StoreProvider } from '@/contexts/Store';
import { cn } from '@/utils/cn';
import localFont from 'next/font/local';

import { getIntlayer, LocalPromiseParams, NextLayoutIntlayer } from 'next-intlayer';
import { getHTMLTextDir, getMultilingualUrls } from 'intlayer';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Metadata } from 'next';
import { el } from 'zod/v4/locales';

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
          <StoreProvider>{children}</StoreProvider>
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
    title: {
      default: metadata.title.default.value,
      template: metadata.title.template.value
    },
    description: metadata.description.value,
    creator: metadata.creator.value,
    publisher: metadata.publisher.value,
    category: metadata.category.value,
    keywords: metadata.keywords.value,
    authors: metadata.authors.map((el) => ({ name: el.name.value, url: el.url.value })),
    openGraph: {
      url: localizedUrl,
      type: metadata.openGraph.type.value,
      title: metadata.title.default.value,
      description: metadata.description.value,
      siteName: metadata.openGraph.siteName.value,
      images: metadata.openGraph.images.map((el) => ({
        url: el.url.value,
        width: el.width.value,
        height: el.height.value,
        alt: el.alt.value
      }))
    },
    twitter: {
      card: metadata.twitter.card.value,
      title: metadata.title.default.value,
      description: metadata.description.value,
      images: metadata.twitter.images.map((url) => url.value)
    },
    metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
    alternates: {
      canonical: localizedUrl,
      languages: { ...multilingualUrls, 'x-default': '/' }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    }
  };
};

export default LocaleLayout;
