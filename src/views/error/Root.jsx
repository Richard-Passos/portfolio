import { capitalize } from '@/utils';

import Sections from './sections';

const ErrorView = ({ data = {}, error, reset }) => {
  const { sections = [] } = data;

  let lastTheme = '';

  return sections.map(({ slug = '', ...data }) => {
    let Section = Sections[slug.split(/[-_]/g).map(capitalize).join('')];

    Section = Section && (
      <Section
        hasTransition={
          slug.toLowerCase() !== 'hero' && lastTheme !== data.theme
        }
        error={error} 
        reset={reset} 
        {...data}
      />
    );

    lastTheme = data.theme;

    return Section;
  });
};

export default ErrorView;
