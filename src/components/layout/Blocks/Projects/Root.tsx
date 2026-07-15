import { Section, SectionProps } from '@/components/layout/Section';
import { Lines } from '@/components/misc/Lines';
import { ProjectsCatalog } from '@/components/modules/Catalog/variants/Projects';
import { AnimateOnScroll } from '@/components/motion/Animate';
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
      className={cn(
        'grid place-items-center items-start gap-16 pb-[calc(var(--py)*2)] lg:grid-cols-12',
        className
      )}
      {...props}
    >
      <header className='relative grid h-full w-full grid-rows-2 lg:col-span-4'>
        <AnimateOnScroll
          from={{ y: 0 }}
          to={{ y: '50%' }}
        >
          <StaggeredTitleOnView
            as='h3'
            end='+=1000'
            className='h-full'
          >
            {data.title}
          </StaggeredTitleOnView>
        </AnimateOnScroll>

        <AnimateOnScroll
          from={{ y: 0 }}
          to={{ y: '50%' }}
        >
          <StaggeredTitleOnView
            as='h6'
            className='sticky top-8 text-base leading-relaxed font-medium tracking-wide'
            end='+=1000'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore sint quas
            sapiente quos ducimus quo. Et eum doloremque tempore!
          </StaggeredTitleOnView>
        </AnimateOnScroll>
      </header>

      <ProjectsCatalog className='lg:col-span-8' />

      <Lines className='-z-10 w-screen border-y' />
    </Section>
  );
};
