import { BentoGridItem, BentoGridItemProps } from '@/components/display/BentoGrid';
import SimpleCard from '@/components/display/Card/Simple';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type AboutLoveProps = MergeProps<
  { value?: BentoGridItemProps['value']; icon: ReactNode; text: ReactNode },
  BentoGridItemProps
>;

export const AboutLove = ({ icon, text, ...props }: AboutLoveProps) => {
  return (
    <BentoGridItem
      value='love'
      {...props}
    >
      <SimpleCard>
        <SimpleCard.Icon>{icon}</SimpleCard.Icon>

        <SimpleCard.Text>{text}</SimpleCard.Text>
      </SimpleCard>
    </BentoGridItem>
  );
};
