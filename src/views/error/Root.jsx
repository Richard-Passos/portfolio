import { normCompName } from '@/utils';

import Sections from './sections';

const ErrorView = ({ data = {}, error, reset }) => {
  const { sections = [] } = data;

  let lastTheme = '';

  return sections.map(({ slug = '', ...data }) => {
    let Section = Sections[normCompName(slug)];

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
