import { BentoGridItem, BentoGridItemProps } from '@/components/display/BentoGrid';
import GradientCard from '@/components/display/Card/Gradient';
import { Badge } from '@/components/display/Badge';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type AboutAboutProps = MergeProps<
  { value?: BentoGridItemProps['value']; badge: ReactNode; text: ReactNode },
  BentoGridItemProps
>;

export const AboutAbout = ({ badge, text, ...props }: AboutAboutProps) => {
  return (
    <BentoGridItem
      value='about'
      {...props}
    >
      <GradientCard
        gradient='radial-gradient(
              140% 140% at 100% 0%,
              #411073 0%,
              #0c1149 10%,
              #f00040 20%,
              transparent 60%
            )'
        className='min-h-64 rounded-none after:rounded-none'
      >
        <Badge
          color='primary'
          variant='subtle'
          className='mb-8'
        >
          {badge}
        </Badge>

        <GradientCard.Text className='mt-auto'>{text}</GradientCard.Text>
      </GradientCard>
    </BentoGridItem>
  );
};
