import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type LinkCardTitleProps = TitleProps;

export const LinkCardTitle = ({ className, ...props }: LinkCardTitleProps) => {
  return (
    <Title
      as='h4'
      className={cn('mt-4 text-center text-sm', className)}
      {...props}
    />
  );
};
