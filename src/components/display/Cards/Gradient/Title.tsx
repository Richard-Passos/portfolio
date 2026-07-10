import { Title, TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type GradientCardTitleProps = MergeProps<{ as?: TitleProps['as'] }, TitleProps>;

export const GradientCardTitle = ({ className, ...props }: GradientCardTitleProps) => {
  return (
    <Title
      as='h6'
      className={cn('mt-auto', className)}
      {...props}
    />
  );
};
