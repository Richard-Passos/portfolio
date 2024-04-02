import { Bg, Lines, NextPage } from '@/components';

import Sections from './sections';

const WorkView = () => {
  return (
    <>
      <Sections.Hero />

      <Sections.Mission
        id='scrollTo'
        theme='dark'
      />

      <Sections.Services theme='light' />

      <Sections.Projects />

      <Sections.WhyMe theme='dark' />

      <Sections.Skills theme='light' />

      <Sections.Values theme='dark' />

      <div className='dark relative flex w-full items-center justify-center pb-lg max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds'>
        <NextPage
          href='/about'
          text='About me'
        />

        <Bg />

        <Lines />
      </div>
    </>
  );
};

export default WorkView;
