import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type LinkCardTitleProps = TitleProps;

export const LinkCardTitle = ({ className, ...props }: LinkCardTitleProps) => {
  return (
    <Title
      as='h5'
      className={cn('mt-2 text-center text-base', className)}
      {...props}
    />
  );
};
