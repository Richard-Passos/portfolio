import { StoreProvider } from '@/contexts/Store';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import { SmoothScroll } from '@/components/motion/SmoothScroll';

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
            <Header/>
    
            <main className='min-h-dvh flex flex-col items-center justify-stretch w-full'>
              {children}
            </main>

            <Footer/>
          </SmoothScroll> 
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
