import { cn } from '@/utils/cn';
import { MergeProps } from '@/types/MergeProps';
import { Project } from '@/types/Project';
import ProjectCard from '@/components/display/Card/Project';
import { Title } from '@/components/system/Title';
import { useIntlayer } from 'next-intlayer/server';
import { ComponentProps } from 'react';

export type AdjacentProjectsNextProps = MergeProps<{ project: Project }, ComponentProps<'div'>>;

export const AdjacentProjectsNext = ({
  project,
  className,
  ...props
}: AdjacentProjectsNextProps) => {
  const t = useIntlayer('adjacent-projects');

  return (
    <div
      className={cn('grow basis-0', className)}
      {...props}
    >
      <Title
        aria-hidden
        className='mb-4 max-sm:hidden'
      >
        {t.label.second}
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
