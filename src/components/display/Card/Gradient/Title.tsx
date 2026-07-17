import { Title, TitleProps } from '@/components/system/Title';
import { cn } from '@/utils/cn';

export type GradientCardTitleProps = TitleProps;

export const GradientCardTitle = ({ className, ...props }: GradientCardTitleProps) => {
  return (
    <Title
      as='h4'
      styleAs='h6'
      className={cn('mt-auto', className)}
      {...props}
    />
  );
};
