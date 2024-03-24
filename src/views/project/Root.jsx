import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { Bg, DotsLoader, Lines, NextProject } from '@/components';

import Sections from './sections';

const ProjectView = async ({ promises }) => {
  const { data = {}, meta: { adjacentIds = {} } = {} } = await promises.data;

  if (!data.title) notFound();

  return (
    <main className='flex w-full max-w-bounds flex-col items-center'>
      <Sections.Hero
        data={data}
        adjacentIds={adjacentIds}
        theme='light'
      />

      <Sections.About
        data={data}
        theme='light'
      />

      <Suspense fallback={<DotsLoader />}>
        <Sections.Images
          promise={promises.images}
          theme='dark'
        />
      </Suspense>

      <div className='dark relative flex w-full items-center justify-center pb-lg max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds'>
        <NextProject id={adjacentIds.next} />

        <Bg />

        <Lines />
      </div>
    </main>
  );
};

export default ProjectView;
