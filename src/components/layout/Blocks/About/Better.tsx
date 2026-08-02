import { BentoGridItem, BentoGridItemProps } from '@/components/display/BentoGrid';
import SimpleCard from '@/components/display/Card/Simple';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type AboutBetterProps = MergeProps<
  { value?: BentoGridItemProps['value']; icon: ReactNode; text: ReactNode },
  BentoGridItemProps
>;

export const AboutBetter = ({ icon, text, ...props }: AboutBetterProps) => {
  return (
    <BentoGridItem
      value='better'
      {...props}
    >
      <SimpleCard>
        <SimpleCard.Icon>{icon}</SimpleCard.Icon>

        <SimpleCard.Text>{text}</SimpleCard.Text>
      </SimpleCard>
    </BentoGridItem>
  );
};
