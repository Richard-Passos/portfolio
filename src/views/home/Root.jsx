import { Lines } from '@/components';

import Section from './section';

const Root = () => {
  return (
    <>
      <Lines />

      <main>
        <Section.Hero />

        <Section.Work />

        <Section.About />
      </main>
    </>
  );
};

export default Root;
