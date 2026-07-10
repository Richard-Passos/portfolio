import { ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollBands, ScrollBandsProps } from '@/components/motion/ScrollBands';
import { MergeProps } from '@/types/MergeProps';

export type MissionProps = MergeProps<
  {
    data: {
      items: ScrollBandsProps['items'];
      description: ReactNode;
    };
  },
  SectionProps
>;

export const Mission = ({ data, ...props }: MissionProps) => {
  return (
    <Section {...props}>
      <ScrollBands items={data.items} />

      <section className='mt-10 w-9by10 max-w-xl text-center leading-relaxed tracking-wide'>
        {data.description}
      </section>
    </Section>
  );
};
