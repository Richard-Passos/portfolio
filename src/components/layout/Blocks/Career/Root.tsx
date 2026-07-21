import { Section, SectionProps } from '@/components/layout/Section';
import { CareerCatalog } from '@/components/modules/Catalog/Career';
import { ReviewTitleOnScroll } from '@/components/system/Title/ReviewOnScroll';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export type CareerProps = MergeProps<
  {
    data: {
      title: ReactNode;
    };
  },
  SectionProps
>;

export const Career = ({ data, className, ...props }: CareerProps) => {
  return (
    <Section
      className={cn('w-full', className)}
      {...props}
    >
      <ReviewTitleOnScroll>{data.title}</ReviewTitleOnScroll>

      <CareerCatalog
        id='work'
        className='w-9/10'
      />
    </Section>
  );
};
