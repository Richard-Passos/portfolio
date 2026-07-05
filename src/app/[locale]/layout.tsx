import { getHTMLTextDir } from 'intlayer';
import { type NextLayoutIntlayer } from 'next-intlayer';

import { AppProvider } from '@/contexts';
import '@/styles/globals.css';

export { generateStaticParams } from 'next-intlayer';

const LocaleLayout: NextLayoutIntlayer = async ({ params, children }) => {
  const { locale } = await params;

  return (
    <html
      className='overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden'
      lang={locale}
      dir={getHTMLTextDir(locale)}
    >
      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip bg-body'>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
