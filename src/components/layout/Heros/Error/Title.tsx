import { Title, TitleProps } from '@/components/system/Title';
import { cn } from '@/utils/cn';

export type ErrorHeroTitleProps = TitleProps;

export const ErrorHeroTitle = ({ className, ...props }: ErrorHeroTitleProps) => {
  return (
    <Title
      as='h1'
      styleAs='h5'
      className={cn('max-w-lg', className)}
      {...props}
    />
  );
};
