import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type SpinCardTitleProps = TitleProps;

export const SpinCardTitle = ({ className, ...props }: SpinCardTitleProps) => {
  return (
    <Title
      as='h4'
      styleAs='h6'
      className={cn('text-center text-base wrap-break-word', className)}
      {...props}
    />
  );
};
