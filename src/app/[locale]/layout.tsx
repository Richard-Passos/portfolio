import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getHTMLTextDir } from 'intlayer';
import { IntlayerClientProvider, type NextLayoutIntlayer } from 'next-intlayer';

import { Toaster } from '@/components/feedback';
import { SmoothScroll } from '@/components/motion';
import { StoreProvider } from '@/contexts';


export { generateStaticParams } from 'next-intlayer';

const LocaleLayout: NextLayoutIntlayer = async ({ params, children }) => {
  const { locale } = await params;

  return (
    <html
      className='overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden'
      lang={locale}
      dir={getHTMLTextDir(locale)}
    >
      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip bg-white'>
        <StoreProvider>

        </StoreProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
