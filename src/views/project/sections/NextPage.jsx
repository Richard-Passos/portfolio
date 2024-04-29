import { projectsApi } from '@/api';
import { Button, NextPage, Section } from '@/components';
import { Icon } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewNextPageSection = async ({
  project = {},
  className,
  data = {},
  ...props
}) => {
  const { adjacentIds = {} } = project,
    { actions = [] } = data;

  const nextProject = (await projectsApi.getOne(adjacentIds.next)).data || {};

  data = {
    title: data.title,
    description: `${nextProject.title} ·`,
    action: {
      ...actions[0],
      data: { ...actions[0]?.data, href: `/projects/${nextProject.slug}` },
    },
    image: nextProject.thumbnail,
  };

  return (
    <Section
      className={cn(
        'flex !min-h-0 flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <NextPage data={data} />

      <Button
        className='mt-md'
        {...actions[1]?.data}
      >
        {actions[1]?.data?.label}

        <Button.Icon animation={actions[1]?.animation}>
          <Icon {...actions[1]?.icon} />
        </Button.Icon>
      </Button>
    </Section>
  );
};

export default ProjectViewNextPageSection;
