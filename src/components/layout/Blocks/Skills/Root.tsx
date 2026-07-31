import { Section, SectionProps } from '@/components/layout/Section';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import { Skill } from '@/types/Skill';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import SpinCard from '@/components/display/Card/Spin';

export type SkillsProps = MergeProps<{ data: { title: ReactNode; items: Skill[] } }, SectionProps>;

export const Skills = ({ data, ...props }: SkillsProps) => {
  return (
    <Section {...props}>
      <StaggeredTitleOnView
        as='h2'
        className='max-w-xl text-center'
      >
        {data.title}
      </StaggeredTitleOnView>

      <SpinCard.Group className='mt-12 max-w-7xl'>
        {data.items.map(({ id, title, Icon }) => (
          <SpinCard key={id}>
            <SpinCard.Content>
              <SpinCard.Front>
                <SpinCard.Icon>
                  <Icon />
                </SpinCard.Icon>
              </SpinCard.Front>

              <SpinCard.Back>
                <SpinCard.Title>{title}</SpinCard.Title>
              </SpinCard.Back>
            </SpinCard.Content>

            <SpinCard.Border />
          </SpinCard>
        ))}
      </SpinCard.Group>
    </Section>
  );
};
