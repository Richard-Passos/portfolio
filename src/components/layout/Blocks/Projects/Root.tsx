import { Section, SectionProps } from '@/components/layout/Section';
import { Lines } from '@/components/misc/Lines';
import { ProjectsCatalog } from '@/components/modules/Catalog/variants/Projects';
import { StaggeredTitleOnView } from '@/components/motion/Title/StaggeredOnView';
import { Text } from '@/components/system/Text';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export type ProjectsProps = MergeProps<
  {
    data: {
      title: ReactNode;
      text: ReactNode;
    };
  },
  SectionProps
>;

export const Projects = ({ data, className, ...props }: ProjectsProps) => {
  return (
    <Section
      className={cn('grid place-items-center items-start gap-16 lg:grid-cols-12', className)}
      {...props}
    >
      <header className='sticky top-8 mb-20 flex w-full lg:col-span-4'>
        <StaggeredTitleOnView as='h3'>{data.title}</StaggeredTitleOnView>

        <Text>{data.text}</Text>
      </header>

      <ProjectsCatalog className='lg:col-span-8' />

      <Lines className='-z-10 w-screen border-y' />
    </Section>
  );
};
