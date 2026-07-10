import { ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollBands, ScrollBandsProps } from '@/components/motion/ScrollBands';
import { MergeProps } from '@/types/MergeProps';
import { Lines } from '@/components/misc/Lines';
import { cn } from '@/utils/cn';

export type MissionProps = MergeProps<
  {
    data: {
      items: ScrollBandsProps['items'];
      text: ReactNode;
    };
  },
  SectionProps
>;

export const Mission = ({ data, className, ...props }: MissionProps) => {
  return (
    <Section
      className={cn('w-full', className)}
      {...props}
    >
      <ScrollBands items={data.items} />

      <section className='mt-10 w-9/10 max-w-xl text-center leading-relaxed tracking-wide'>
        {data.text}
      </section>

      <Lines className='-z-10 border-b' />
    </Section>
  );
};
