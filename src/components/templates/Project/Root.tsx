import { ProjectPage } from '@/types';

import PageTemplate, { PageTemplateProps } from '../Page';

type ProjectTemplateOwnProps = {
  hero: ProjectPage['hero'];
};
type ProjectTemplateProps = ProjectTemplateOwnProps &
  Omit<PageTemplateProps, keyof ProjectTemplateOwnProps>;

const ProjectTemplate = ({ hero, ...props }: ProjectTemplateProps) => {
  return (
    <PageTemplate
      hero={hero ? { type: 'Project', ...hero } : undefined}
      {...props}
    />
  );
};
export default ProjectTemplate;
export type { ProjectTemplateProps };
