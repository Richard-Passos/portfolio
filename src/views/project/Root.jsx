import { Suspense } from 'react';

import { DotsLoader } from '@/components';
import { normCompName } from '@/utils';

import Sections from './sections';

const ProjectView = ({ data = {}, promise }) => {
  const { project = {}, sections = [] } = data;

  let lastTheme = '';

  return sections.map(({ slug = '', ...data }) => {
    slug = slug.toLowerCase();

    let Section = Sections[normCompName(slug)];

    Section =
      Section &&
      (slug === 'images' ? (
        <Suspense fallback={<DotsLoader />}>
          <Section
            hasTransition={lastTheme !== data.theme}
            promise={promise}
            project={{
              ...project.data,
              adjacentIds: project.meta?.adjacentIds,
            }}
            {...data}
          />
        </Suspense>
      ) : (
        <Section
          hasTransition={
            slug.toLowerCase() !== 'hero' && lastTheme !== data.theme
          }
          project={{ ...project.data, adjacentIds: project.meta?.adjacentIds }}
          {...data}
        />
      ));

    lastTheme = data.theme;

    return Section;
  });
};

export default ProjectView;
