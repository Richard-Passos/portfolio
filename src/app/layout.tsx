import { PropsWithChildren } from 'react';

import { StoreProvider } from '@/contexts/Store';
import '@/styles/globals.css';
import { cn } from '@/utils/cn';
import localFont from 'next/font/local';

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
