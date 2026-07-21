import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';
import { Text } from '@/components/system/Text';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import { ReviewTextOnScroll } from '@/components/system/Text/ReviewOnScroll';
import { Lines } from '@/components/misc/Lines';

export type CtaProps = MergeProps<{ data: { title: ReactNode; text: ReactNode } }, SectionProps>;

export const Cta = ({ data, className, ...props }: CtaProps) => {
  return (
    <Section
      className={cn('min-h-[min(100dvh,var(--max-height-bounds))] max-w-5xl', className)}
      {...props}
    >
      <Title
        as='h6'
        className='mr-auto leading-relaxed tracking-widest uppercase'
      >
        {data.title}
      </Title>

      <ReviewTextOnScroll className='mt-4 mr-auto text-4xl md:text-7xl'>
        {data.text}
      </ReviewTextOnScroll>

      <Lines className='-z-10 border-y' />
    </Section>
  );
};
