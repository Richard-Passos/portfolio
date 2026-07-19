import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import { Skill } from '@/types/Skill';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import SpinCard from '@/components/display/Card/Spin';

export type SkillsProps = MergeProps<{ data: { title: ReactNode; items: Skill[] } }, SectionProps>;

export const Skills = ({ data, className, ...props }: SkillsProps) => {
  return (
    <Section
      className={cn('grid place-items-center items-start gap-16 lg:grid-cols-12', className)}
      {...props}
    >
      <StaggeredTitleOnView
        as='h4'
        className='lg:col-span-4'
      >
        {data.title}
      </StaggeredTitleOnView>

      <ul className='flex w-full flex-wrap justify-end gap-4 lg:col-span-8'>
        {data.items.map((el) => (
          <SpinCard
            asChild
            key={el.id}
          >
            <li>
              <SpinCard.Front>
                <SpinCard.Icon>{el.icon}</SpinCard.Icon>
              </SpinCard.Front>

              <SpinCard.Back>
                <SpinCard.Title>{el.title}</SpinCard.Title>
              </SpinCard.Back>
            </li>
          </SpinCard>
        ))}
      </ul>
    </Section>
  );
};
