import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type MarqueeCardTitleProps = TitleProps;

export const MarqueeCardTitle = ({ className, ...props }: MarqueeCardTitleProps) => {
  return (
    <Title
      as='h4'
      className={cn('mt-8 text-center', className)}
      {...props}
    />
  );
};
