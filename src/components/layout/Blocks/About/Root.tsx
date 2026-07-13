import { Section, SectionProps } from '@/components/layout/Section';
import { ReviewTitleOnScroll } from '@/components/motion/Title/ReviewOnScroll';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export type AboutProps = MergeProps<
  {
    data: {
      title: ReactNode;
      items: {
        about: '';
      };
    };
  },
  SectionProps
>;

export const About = ({ data, className, ...props }: AboutProps) => {
  return (
    <Section
      className={cn('w-full pb-[calc(var(--py)*2)]', className)}
      {...props}
    >
      <ReviewTitleOnScroll>{data.title}</ReviewTitleOnScroll>
    </Section>
  );
};
