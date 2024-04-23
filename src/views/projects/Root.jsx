import { normCompName } from '@/utils';

import Sections from './sections';

const ProjectsView = ({ data = {} }) => {
  const { sections = [] } = data;

  let lastTheme = '';

  return sections.map(({ slug = '', ...data }) => {
    let Section = Sections[normCompName(slug)];

    Section = Section && (
      <Section
        id={slug}
        hasTransition={
          slug.toLowerCase() !== 'hero' && lastTheme !== data.theme
        }
        {...data}
      />
    );

    lastTheme = data.theme;

    return Section;
  });
};

export default ProjectsView;
