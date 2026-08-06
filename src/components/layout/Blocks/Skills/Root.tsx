import { Section, SectionProps } from '@/components/layout/Section';

export type SkillsProps = SectionProps;

export const Skills = (props: SkillsProps) => {
  return (
    <Section
      id='skills'
      {...props}
    />
  );
};
