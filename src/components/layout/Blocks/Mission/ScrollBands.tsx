import ScrollBands, { ScrollBandsProps } from '@/components/motion/ScrollBands';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type MissionScrollBandsProps = MergeProps<{ items: ReactNode[] }, ScrollBandsProps>;

export const MissionScrollBands = ({ items, ...props }: MissionScrollBandsProps) => {
  return (
    <ScrollBands {...props}>
      {items.map((el, i) => (
        <ScrollBands.Item
          key={i}
          index={i}
        >
          {el}
        </ScrollBands.Item>
      ))}
    </ScrollBands>
  );
};
