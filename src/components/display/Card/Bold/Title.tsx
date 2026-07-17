import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type BoldCardTitleProps = TitleProps;

export const BoldCardTitle = ({ className, ...props }: BoldCardTitleProps) => {
  return (
    <Title
      as='h4'
      className={cn('mt-8 leading-none', className)}
      {...props}
    />
  );
};
