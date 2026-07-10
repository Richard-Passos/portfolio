import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { StoreProvider } from '@/contexts/Store';
import '@/styles/globals.css';

export type RootLayoutProps = PropsWithChildren;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      className='overflow-x-clip has-[body[data-scroll-lock]]:overflow-y-hidden'
      lang='pt-BR'
    >
      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip bg-body'>
        <StoreProvider>
          <SmoothScroll>
            <Header />

            <main className='flex min-h-dvh w-full flex-col items-center justify-stretch'>
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
