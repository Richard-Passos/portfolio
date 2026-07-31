import { StoreProvider } from '@/contexts/Store';
import { cn } from '@/utils/cn';
import localFont from 'next/font/local';

import { IntlayerClientProvider, NextLayoutIntlayer } from 'next-intlayer';
import { getHTMLTextDir } from 'intlayer';
import { SmoothScroll } from '@/components/motion/SmoothScroll';

export { generateStaticParams } from 'next-intlayer';

const displayFont = localFont({
  src: '../../../public/fonts/Archivo-Variable.ttf',
  display: 'swap'
});

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  console.log('Locale Layout: ', locale);

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

export default LocaleLayout;
