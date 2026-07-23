import RootData from './.data';

import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { MergeProps } from '@/types/MergeProps';
import { Project } from '@/types/Project';
import ProjectCard from '@/components/display/Card/Project';
import { Title } from '@/components/system/Title';
import { Lines } from '@/components/misc/Lines';

export type AdjacentProjectsProps = MergeProps<
  { data: { prev: Project; next: Project } },
  SectionProps
>;

export const AdjacentProjects = ({ data, className, ...props }: AdjacentProjectsProps) => {
  return (
    <Section
      className={cn('min-h-(--h)', className)}
      {...props}
    >
      <Title className='sm:sr-only'>
        {RootData.label.first} {RootData.label.second}
      </Title>

      <section className='mt-8 grid w-full max-w-3xl gap-4 sm:grid-cols-2 sm:pt-32'>
        <div className='grow basis-0 sm:-translate-y-32'>
          <Title
            aria-hidden
            className='mb-4 max-sm:hidden'
          >
            {RootData.label.first}
          </Title>

          <ProjectCard asChild>
            <section>
              <ProjectCard.Image
                src={data.prev.thumbnail}
                href={`/projects/${data.prev.id}`}
              />

              <ProjectCard.Header>
                <div>
                  <ProjectCard.Title>{data.prev.title}</ProjectCard.Title>

                  <ProjectCard.Extra
                    year={data.prev.year}
                    roles={data.prev.roles}
                  />
                </div>

                <ProjectCard.Trigger href={`/projects/${data.prev.id}`} />
              </ProjectCard.Header>
            </section>
          </ProjectCard>
        </div>

        <div className='grow basis-0'>
          <Title
            aria-hidden
            className='mb-4 max-sm:hidden'
          >
            {RootData.label.second}
          </Title>

          <ProjectCard asChild>
            <section>
              <ProjectCard.Image
                src={data.next.thumbnail}
                href={`/projects/${data.next.id}`}
              />

              <ProjectCard.Header>
                <div>
                  <ProjectCard.Title>{data.next.title}</ProjectCard.Title>

                  <ProjectCard.Extra
                    year={data.next.year}
                    roles={data.next.roles}
                  />
                </div>

                <ProjectCard.Trigger href={`/projects/${data.next.id}`} />
              </ProjectCard.Header>
            </section>
          </ProjectCard>
        </div>
      </section>

      <Lines className='-z-10 border-y' />
    </Section>
  );
};
