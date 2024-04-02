import { NextPage, Section } from '@/components';

import Sections from './sections';

const AboutView = () => {
  return (
    <>
      <Sections.Hero className='dark-layout' />

      <Sections.Background />

      <Sections.Extra theme='light' />

      <Sections.Values theme='light' />

      <Section
        className='flex items-center justify-center'
        theme='dark'
      >
        <NextPage
          href='/contact'
          text='Contact'
        />
      </Section>
    </>
  );
};

export default AboutView;
