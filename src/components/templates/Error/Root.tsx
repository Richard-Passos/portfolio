import { ErrorPage } from '@/types';

import PageTemplate, { PageTemplateProps } from '../Page';

type ErrorTemplateOwnProps = {
  hero: ErrorPage['hero'];
};

type ErrorTemplateProps = ErrorTemplateOwnProps &
  Omit<PageTemplateProps, keyof ErrorTemplateOwnProps>;

const ErrorTemplate = ({ hero, ...props }: ErrorTemplateProps) => {
  return (
    <PageTemplate
      hero={hero ? { type: 'Secondary', ...hero } : undefined}
      {...props}
    />
  );
};
export default ErrorTemplate;
export type { ErrorTemplateProps };
