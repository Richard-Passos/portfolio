import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type TimeCardTitleProps = TitleProps;

export const TimeCardTitle = ({ className, ...props }: TimeCardTitleProps) => {
  return (
    <Title
      as='h5'
      className={cn('text-center text-sm text-placeholder', className)}
      {...props}
    />
  );
};
