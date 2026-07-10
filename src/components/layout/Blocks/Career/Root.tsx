import { Section, SectionProps } from '@/components/layout/Section';
import { MergeProps } from '@/types/MergeProps';

export type CareerProps = MergeProps<{}, SectionProps>;

export const Career = ({ ...props }: CareerProps) => {
  return <Section {...props}></Section>;
};
