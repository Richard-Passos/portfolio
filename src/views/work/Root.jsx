import { Bg, Lines, NextPage } from '@/components';
import { cn } from '@/utils';

import Sections from './sections';

const WorkView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'mx-auto flex max-w-bounds flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <Sections.Hero />

      <Sections.Mission
        id='scrollTo'
        theme='dark'
      />

      <Sections.Services theme='light' />

      <Sections.Projects />

      <Sections.WhyMe theme='dark' />

      <Sections.Stats theme='dark' />

      <Sections.Skills theme='light' />

      <Sections.Values theme='dark' />

      <div className='dark relative flex w-full items-center pb-md max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds'>
        <NextPage
          href='/about'
          text='About me'
        />

        <Bg />

        <Lines />
      </div>
    </main>
  );
};

export default WorkView;
