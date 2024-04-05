import { capitalize } from '@/utils';

import Sections from './sections';

const AboutView = ({ data = {} }) => {
  const { sections = [] } = data;

  let lastTheme = '';

  return sections.map(({ slug = '', ...data }) => {
    let Section = Sections[slug.split(/[-_]/g).map(capitalize).join('')];

    Section = Section && (
      <Section
        hasTransition={slug !== 'hero' && lastTheme !== data.theme}
        {...data}
      />
    );

    lastTheme = data.theme;

    return Section;
  });
};

export default AboutView;
