import { normCompName } from '@/utils';

import Sections from './sections';

const ProjectView = ({ data = {} }) => {
  const { project = {}, sections = [] } = data;

  let lastTheme = '';

  return sections.map(({ slug = '', ...data }) => {
    let Section = Sections[normCompName(slug)];

    Section = Section && (
      <Section
        hasTransition={
          slug.toLowerCase() !== 'hero' && lastTheme !== data.theme
        }
        project={{ ...project.data, adjacentIds: project.meta?.adjacentIds }}
        {...data}
      />
    );

    lastTheme = data.theme;

    return Section;
  });
};

export default ProjectView;
