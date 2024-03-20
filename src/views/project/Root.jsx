import { Suspense } from 'react';

import { DotsLoader } from '@/components';

import Sections from './sections';

const ProjectView = async ({ promises }) => {
  const data = await promises.data;

  return (
    <main className='w-full max-w-bounds flex flex-col items-center'>
      <Sections.Hero data={data} />

            <Sections.Video data={data.video} theme='dark' />

      <Sections.Why data={data} theme='light' />

      <Suspense fallback={<DotsLoader />}>
        <Sections.Images promise={promises.images} theme='dark' />
      </Suspense>
    </main>
  );
};

export default ProjectView;
