import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type MarqueeCardTitleProps = TitleProps;

export const MarqueeCardTitle = ({ className, ...props }: MarqueeCardTitleProps) => {
  return (
    <Title
      as='h5'
      className={cn('mt-auto text-center', className)}
      {...props}
    />
  );
};
