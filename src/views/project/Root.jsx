import { Suspense } from 'react';

import { DotsLoader } from '@/components';

import Sections from './sections';

const ProjectView = async ({ promises }) => {
  const data = await promises.data;

  return (
    <main className='w-full max-w-bounds'>
      <Sections.Hero data={data} />

      <Suspense fallback={<DotsLoader />}>
        <Sections.Images promise={promises.images} />
      </Suspense>
    </main>
  );
};

export default ProjectView;
