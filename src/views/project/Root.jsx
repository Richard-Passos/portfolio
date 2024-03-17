import { Suspense } from 'react';

import { DotsLoader } from '@/components';

import Sections from './sections';

const ProjectView = async ({ promises }) => {
  const data = await promises.data;

  return (
    <main className='w-full max-w-bounds flex flex-col items-center'>
      <Sections.Hero data={data} />

      <Sections.Video theme='dark' data={data.video} />

      <Sections.Why theme='light' data={data} />

      <Suspense fallback={<DotsLoader />}>
        <Sections.Images theme='dark' promise={promises.images} />
      </Suspense>
    </main>
  );
};

export default ProjectView;
