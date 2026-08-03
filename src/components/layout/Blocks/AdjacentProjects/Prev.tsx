import { cn } from '@/utils/cn';
import ProjectCard from '@/components/display/Card/Project';
import { Title } from '@/components/system/Title';
import { useIntlayer } from 'next-intlayer/server';
import { PlusIcon } from '@/components/system/Icon/Plus';
import { ComponentProps } from 'react';
import { MergeProps } from '@/types/MergeProps';
import { Project } from '@/types/Project';

export type AdjacentProjectsPrevProps = MergeProps<
  { project: Project },
  ComponentProps<'div'>,
  'children'
>;

export const AdjacentProjectsPrev = ({
  project,
  className,
  ...props
}: AdjacentProjectsPrevProps) => {
  const t = useIntlayer('adjacent-projects');

  return (
    <div
      className={cn('grow basis-0 sm:-translate-y-32', className)}
      {...props}
    >
      <Title
        aria-hidden
        className='mb-4 max-sm:hidden'
      >
        {t.label.first} <PlusIcon className='size-[.8em]' />
      </Title>

      <ProjectCard asChild>
        <section>
          <ProjectCard.Image
            src={project.thumbnail}
            href={`/projects/${project.id}`}
          />

          <ProjectCard.Header>
            <div>
              <ProjectCard.Title>{project.title}</ProjectCard.Title>

              <ProjectCard.Extra
                year={project.year}
                roles={project.roles}
              />
            </div>

            <ProjectCard.Trigger href={`/projects/${project.id}`} />
          </ProjectCard.Header>
        </section>
      </ProjectCard>
    </div>
  );
};
