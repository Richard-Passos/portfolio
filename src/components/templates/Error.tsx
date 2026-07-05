import { ErrorPage } from '@/types';
import { MergeProps } from '@/types';

import PageTemplate, { PageTemplateProps } from '../Page';

type ErrorTemplateOwnProps = {
  hero: ErrorPage['hero'];
};

type ErrorTemplateProps = MergeProps<ErrorTemplateOwnProps, PageTemplateProps>;

const ErrorTemplate = ({ hero, ...props }: ErrorTemplateProps) => {
  return (
    <PageTemplate
      hero={hero ? { type: 'Secondary', ...hero } : undefined}
      {...props}
    />
  );
};
export { ErrorTemplate };
export type { ErrorTemplateProps };
