import { PropsWithChildren } from 'react';

import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export type RootTemplateProps = PropsWithChildren;

const RootTemplate = ({ children }: RootTemplateProps) => {
  return (
    <SmoothScroll>
      <Header />

      <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
        {children}
      </main>

      <Footer />
    </SmoothScroll>
  );
};

export default RootTemplate;
