import { projectsApi } from '@/api';
import { NextPage, Section } from '@/components';
import { cn } from '@/utils';

const ProjectViewNextPageSection = async ({
  project = {},
  className,
  data = {},
  ...props
}) => {
  const { adjacentIds = {} } = project;

  const nextProject = (await projectsApi.getOne(adjacentIds.next)).data || {};

  data = {
    ...data,
    description: `${nextProject.title} ·`,
    image: nextProject.thumbnail,
  };

  return (
    <Section
      className={cn('!min-h-0', className)}
      {...props}
    >
      <NextPage data={data} />
    </Section>
  );
};

export default ProjectViewNextPageSection;
