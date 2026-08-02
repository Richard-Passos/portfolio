import { BentoGridItem, BentoGridItemProps } from '@/components/display/BentoGrid';
import BoldCard from '@/components/display/Card/Bold';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type AboutLocationProps = MergeProps<
  { value?: BentoGridItemProps['value']; icon: ReactNode; title: ReactNode },
  BentoGridItemProps
>;

export const AboutLocation = ({ icon, title, ...props }: AboutLocationProps) => {
  return (
    <BentoGridItem
      value='location'
      {...props}
    >
      <BoldCard>
        <BoldCard.Icon>{icon}</BoldCard.Icon>

        <BoldCard.Title>{title}</BoldCard.Title>
      </BoldCard>
    </BentoGridItem>
  );
};
