import { NextPage, Section } from '@/components';

import Sections from './sections';

const WorkView = () => {
  return (
    <>
      <Sections.Hero theme='light' />

      <Sections.Mission
        id='scrollTo'
        theme='dark'
      />

      <Sections.Services theme='light' />

      <Sections.Projects theme='light' />

      <Sections.WhyMe theme='dark' />

      <Sections.Skills theme='light' />

      <Sections.Values theme='dark' />

      <Section
        hasTransition={false}
        theme='dark'
        className='flex items-center justify-center'
      >
        <NextPage
          href='/about'
          text='About me'
        />
      </Section>
    </>
  );
};

export default WorkView;
