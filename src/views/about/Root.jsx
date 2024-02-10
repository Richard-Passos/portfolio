import { NextPage, Section } from '@/components';
import { cn } from '@/utils';

import Sections from './sections';

const AboutView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'dark-layout dark mx-auto flex max-w-bounds flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <Sections.Hero />

      <Sections.Background />

      <Sections.Extra theme='light' />

      <Sections.Values theme='light' />

      <Section
        className='flex w-full items-center justify-center'
        theme='dark'
      >
        <NextPage
          href='/contact'
          text='Contact'
        />
      </Section>
    </main>
  );
};

export default AboutView;
