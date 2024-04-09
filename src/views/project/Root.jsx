import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { DotsLoader, NextProject, Section } from '@/components';

import Sections from './sections';

const ProjectView = async ({ promises }) => {
  const { data = {}, meta: { adjacentIds = {} } = {} } = await promises.data;

  if (!data.slug) notFound();

  return (
    <>
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

      <Section
        hasTransition={false}
        theme='dark'
        className='flex items-center justify-center'
      >
        <NextProject id={adjacentIds.next} />
      </Section>
    </>
  );
};

export default ProjectView;
