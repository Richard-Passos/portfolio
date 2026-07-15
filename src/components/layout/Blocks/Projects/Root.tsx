import { Section, SectionProps } from '@/components/layout/Section';
import { Lines } from '@/components/misc/Lines';
import { ProjectsCatalog } from '@/components/modules/Catalog/variants/Projects';
import { ReviewTextOnScroll } from '@/components/system/Text/ReviewOnScroll';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export type ProjectsProps = MergeProps<
  {
    data: {
      title: ReactNode;
    };
  },
  SectionProps
>;

export const Projects = ({ data, className, ...props }: ProjectsProps) => {
  return (
    <Section
      className={cn(
        'relative grid place-items-center items-start gap-16 pb-[calc(var(--py)*2)] lg:grid-cols-12',
        className
      )}
      {...props}
    >
      <StaggeredTitleOnView
        as='h3'
        className='sticky top-8 lg:col-span-4'
      >
        {data.title}
      </StaggeredTitleOnView>

      <ProjectsCatalog className='lg:col-span-8' />

      <Lines className='-z-10 w-screen border-y' />
    </Section>
  );
};
