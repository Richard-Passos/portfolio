import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { StoreProvider } from '@/contexts/Store';
import '@/styles/globals.css';
import { cn } from '@/utils/cn';
import localFont from 'next/font/local';
import { Theme } from '@/components/misc/Theme';

export type RootLayoutProps = PropsWithChildren;

const displayFont = localFont({
  src: '../../public/fonts/Archivo-Variable.ttf',
  display: 'swap'
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang='pt-BR'
      className={cn('scrollbar-gutter-stable overflow-x-clip', displayFont.className)}
    >
      <body className='relative flex min-h-(--h) flex-col items-center overflow-x-clip bg-body [--h:min(100dvh,var(--max-height-bounds))]'>
        <StoreProvider>
          <SmoothScroll>
            <Header />

            <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
              {children}
            </main>

            <Footer />
          </SmoothScroll>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
