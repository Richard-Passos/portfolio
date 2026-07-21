import { Section, SectionProps } from '@/components/layout/Section';
import { ProjectsCatalog } from '@/components/modules/Catalog/Projects';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type ProjectsProps = MergeProps<
  {
    data: {
      title: ReactNode;
    };
  },
  SectionProps
>;

export const Projects = ({ data, ...props }: ProjectsProps) => {
  return (
    <Section {...props}>
      <StaggeredTitleOnView
        as='h2'
        className='max-w-5xl text-center'
      >
        {data.title}
      </StaggeredTitleOnView>

      <ProjectsCatalog className='mt-24' />
    </Section>
  );
};
