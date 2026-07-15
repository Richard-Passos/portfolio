import { ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/Section';
import ScrollBands from '@/components/motion/ScrollBands';
import { MergeProps } from '@/types/MergeProps';
import { Lines } from '@/components/misc/Lines';
import { cn } from '@/utils/cn';
import { Text } from '@/components/system/Text';

export type MissionProps = MergeProps<
  {
    data: {
      items: ReactNode[];
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
      <ScrollBands>
        {data.items.map((el, i) => (
          <ScrollBands.Item
            key={i}
            index={i}
          >
            {el}
          </ScrollBands.Item>
        ))}
      </ScrollBands>

      <Text className='mt-10 w-9/10 max-w-xl text-center leading-relaxed tracking-wide'>
        {data.text}
      </Text>

      <Lines className='-z-10 border-y' />
    </Section>
  );
};
