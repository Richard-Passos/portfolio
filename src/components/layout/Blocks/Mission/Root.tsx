import { ScrollBands, ScrollBandsProps } from '@/components/motion/ScrollBands';
import { Section, SectionProps } from '@/components/layout/Section';
import { ReactNode } from 'react';
import { MergeProps } from '@/types/MergeProps';

export type MissionProps = MergeProps<{
  data: {
    items: ScrollBandsProps['items'];
    description: ReactNode;
  };
}, SectionProps>

export const Mission = ({ data, ...props }: MissionProps) => {
  return (
    <Section {...props}>
      <ScrollBands items={data.items}/>

      <section className='w-9by10 mt-10 max-w-xl text-center leading-relaxed tracking-wide'>
        {data.description}
      </section>
    </Section>
  );
};
